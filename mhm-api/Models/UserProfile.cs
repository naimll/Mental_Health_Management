namespace mhm_api.Models
{
    public class UserProfile
    {
        public DateTime DateOfBirth { get; set; }
        public string Gender { get; set; }
        public List<string> Interests { get; set; }
        public string Bio { get; set; }
    }
}
