using System.ComponentModel.DataAnnotations;

namespace mhm_api.Models
{
    public class RefreshToken
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }

        [Required]
        public string TokenHash { get; set; } // Store Hashed Token for security
        public DateTime ExpiryDate { get; set; }

        [Required]
        public string DeviceId { get; set; } // Unique GUID per refresh session
    }
}
