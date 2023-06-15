using System.Net.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Text.Json;

namespace Help_FinalProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RealEstateController : ControllerBase
    {

        [HttpGet]
        public async Task<IActionResult> GetRentalDataByZip(string zipcode, int offset = 1, int limit = 10, string sort = "lowest_price")
        {
            using (var client = new HttpClient())
            {
                var request = new HttpRequestMessage
                {
                    Method = HttpMethod.Get,
                    RequestUri = new Uri($"https://us-real-estate.p.rapidapi.com/v2/for-rent-by-zipcode?zipcode={zipcode}&limit={limit}&offset={offset}&sort={sort}"),
                    Headers =
                    {
                        { "X-RapidAPI-Key", "8e83093fd5mshda833beb7946c42p1b1ebbjsn0333ad489400" },
                        { "X-RapidAPI-Host", "us-real-estate.p.rapidapi.com" },
                    },
                };

                try
                {
                    using (var response = await client.SendAsync(request))
                    {
                        response.EnsureSuccessStatusCode();
                        var responseBody = await response.Content.ReadAsStringAsync();
                        var options = new JsonSerializerOptions
                        {
                            PropertyNameCaseInsensitive = true
                        };
                        var jsonData = JsonSerializer.Deserialize<object>(responseBody, options);

                        return Ok(jsonData);
                    }
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
        }

    }
}
