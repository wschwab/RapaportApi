using System.ComponentModel.DataAnnotations;

namespace RapaportApi.Models
{
    public class DiamondModel
    {
        [Required]
        public string Shape { get; set; }
        [Key]
        public decimal Size { get; set; }
        [Required]
        public string Color { get; set; }
        [Required]
        public string Clarity { get; set; }
        [Required]
        public decimal Price { get; set; }
        [Required]
        public decimal ListPrice { get; set; }
    }
}
