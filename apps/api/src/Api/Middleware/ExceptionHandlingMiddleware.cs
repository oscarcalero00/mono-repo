using System.Net;
using System.Text.Json;
using Api.Domain.Exceptions;
using Api.Application.Exceptions;

namespace Api.Api.Middleware
{
    public class ExceptionHandlingMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ExceptionHandlingMiddleware> _logger;

        public ExceptionHandlingMiddleware(RequestDelegate next, ILogger<ExceptionHandlingMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Unhandled exception");
                await HandleExceptionAsync(context, ex);
            }
        }

        private static async Task HandleExceptionAsync(HttpContext context, Exception ex)
        {
            var response = context.Response;
            response.ContentType = "application/json";

            var (status, message) = ex switch
            {
                ValidationException => (HttpStatusCode.BadRequest, ex.Message),
                NotFoundException => (HttpStatusCode.NotFound, ex.Message),
                _ => (HttpStatusCode.InternalServerError, "An unexpected error occurred.")
            };

            response.StatusCode = (int)status;

            var result = JsonSerializer.Serialize(new
            {
                error = message,
                status = (int)status
            });

            await response.WriteAsync(result);
        }
    }
}
