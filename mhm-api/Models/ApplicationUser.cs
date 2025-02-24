﻿using Microsoft.AspNetCore.Identity;

namespace mhm_api.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string? FullName { get; set; }
        public bool IsActive { get; set; }
    }
}
