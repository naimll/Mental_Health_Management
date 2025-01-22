using Health.Models;
using System.Collections.Generic;

namespace Health.Services
{
    public interface IUserService
    {
        IEnumerable<User> GetAllUsers();
        User GetUserById(int id);
        User CreateUser(User user);
        bool UpdateUser(int id, User user);
        bool DeleteUser(int id);
    }
}