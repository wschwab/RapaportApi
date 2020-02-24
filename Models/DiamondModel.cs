using System;
using System.ComponentModel.DataAnnotations;

namespace RapaportApi.Models
{
    public class DiamondModel
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        public string Shape { get; set; }
        [Required]
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
