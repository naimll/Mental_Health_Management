using Health.Models;
using System.Collections.Generic;
using System.Linq;

namespace Health.Services
{
    public class UserService : IUserService
    {
        private readonly List<User> _users = new List<User>();

        public IEnumerable<User> GetAllUsers() => _users;

        public User GetUserById(int id) => _users.FirstOrDefault(u => u.Id == id);

        public User CreateUser(User user)
        {
            user.Id = _users.Count + 1;
            _users.Add(user);
            return user;
        }

        public bool UpdateUser(int id, User user)
        {
            var existingUser = GetUserById(id);
            if (existingUser == null) return false;

            existingUser.Username = user.Username;
            existingUser.Password = user.Password;
            existingUser.Email = user.Email;
            existingUser.FirstName = user.FirstName;
            existingUser.LastName = user.LastName;
            existingUser.BirthDate = user.BirthDate;
            existingUser.Gender = user.Gender;

            return true;
        }

        public bool DeleteUser(int id)
        {
            var user = GetUserById(id);
            if (user == null) return false;

            _users.Remove(user);
            return true;
        }
    }
}