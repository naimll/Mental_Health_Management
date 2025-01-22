namespace Health.Models
{
    public class MoodEntry
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Mood { get; set; }
        public DateTime Date { get; set; }

        // Opsionale: Shkalla e humorit (nga 1 në 10)
        public int MoodRating { get; set; }

        // Përshkrim i hollësishëm i gjendjes
        public string Description { get; set; }

        public string ActivityCategory { get; set; }

       

        // Lidhja me User (Many-to-One)
        public User User { get; set; }
    }
    
}
