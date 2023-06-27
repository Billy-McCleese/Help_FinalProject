using Help_FinalProject.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly HelpContext _context;

    public UserController(HelpContext context)
    {
        _context = context;
    }

    // GET: api/User
    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> GetUsers()
    {
        return await _context.Users.ToListAsync();
    }

    // GET: api/User/id
    [HttpGet("{id}")]
    public async Task<ActionResult<User>> GetUser(int id)
    {
        var user = await _context.Users.FindAsync(id);

        if (user == null)
        {
            return NotFound();
        }

        return user;
    }

    // POST: api/User
    [HttpPost]
    public async Task<ActionResult<User>> PostUser(User user)
    {
        if (string.IsNullOrEmpty(user.Name))
        {
            return BadRequest("Email is required.");
        }
        var users = await _context.Users.ToListAsync();
        var existingUser = users.FirstOrDefault(u => CompareUserByName(u, user));

        if (existingUser != null)
        {
            return BadRequest("A user with the same email already exists.");
        }
        user.Id = 0;
        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
    }


    // GET: api/User/email/{email}
    [HttpGet("email/{email}")]
    public async Task<ActionResult<User>> GetUserByEmail(string email)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Name == email);

        if (user == null)
        {
            return NotFound();
        }

        return user;
    }

    private Boolean CompareUserByName(User u, User user)
    {
        return u.Name != null &&
            user.Name != null &&
            string.Equals(u.Name, user.Name, StringComparison.OrdinalIgnoreCase);
    }

    // POST: api/User/login
    [HttpPost("login")]
    public async Task<IActionResult> ValidateUser(User user)
    {
        if (string.IsNullOrEmpty(user.Name) || string.IsNullOrEmpty(user.Password))
        {
            return BadRequest("Email and password are required.");
        }

        var users = await _context.Users.ToListAsync();
        var existingUser = users.FirstOrDefault(u =>
            u.Name != null &&
            string.Equals(u.Name, user.Name, StringComparison.OrdinalIgnoreCase) &&
            u.Password == user.Password);

        if (existingUser != null)
        {
            existingUser.Password = null;

            return Ok(existingUser);
        }

        return Unauthorized("Invalid user.");
    }


    // PUT: api/User/id
    [HttpPut("{id}")]
    public async Task<IActionResult> PutUser(int id, User user)
    {
        if (id != user.Id)
        {
            return BadRequest();
        }

        _context.Entry(user).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!UserExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    // DELETE: api/User/id
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteUser(int id)
    {
        var user = await _context.Users.FindAsync(id);
        if (user == null)
        {
            return NotFound();
        }

        _context.Users.Remove(user);
        await _context.SaveChangesAsync();

        return Ok(user);
    }

    private bool UserExists(int id)
    {
        return _context.Users.Any(e => e.Id == id);
    }
}


