﻿using Api.Domain.Interfaces.Dal;
using Api.Domain.ViewModels.Login;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthenticationRepository _authRepository;

        public AuthController(IAuthenticationRepository authRepository)
        {
            _authRepository = authRepository;
        }

        [HttpPost("register")]
        public async Task<ActionResult<RegisterResponse>> Register([FromBody] RegisterRequest request)
        {
            var result = await _authRepository.Register(request);

            if (!result.isSuccesfully)
                return BadRequest(result);

            var response = 
                new RegisterResponse(result.jwt, result.message,result.isSuccesfully, result.user);
           
            return CreatedAtAction(nameof(Register), response);
        }

        [HttpPost("login")]
        public async Task<ActionResult<LoginResponse>> Login([FromBody] LoginRequest request)
        {
            var result = await _authRepository.Login(request);

            if (!result.isSuccesfully)
                return Unauthorized(result);

            var response = new LoginResponse(result.jwt, result.message, true, result.user);
            return Ok(response);
        }
    }
}