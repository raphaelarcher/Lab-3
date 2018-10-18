using System;
using System.ComponentModel.DataAnnotations;

namespace MvcMovie.Models
{
    public class Movie
    {
        public int ID { get; set; }
        [StringLength(60, MinimumLength = 3, ErrorMessage = "Length of title must be from 3 to 60")]
        [Required]
        public string Title { get; set; }

        [Display(Name = "Release Date")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:MMMM dd, yyyy}")]
        public DateTime ReleaseDate { get; set; }

        [Required]
        [StringLength(30, ErrorMessage = "The field Genre must be less than 30 characters.")]
        public string Genre { get; set; }

        [Range(1, 100, ErrorMessage = "Price must be from $1 to $100")]
        [DataType(DataType.Currency)]
        public decimal Price { get; set; }

        [Required]
        public string Rating { get; set; }
    }

    public enum Ratings
    {
        NC17,
        R,
        PG13,
        PG,
        G,
        NR
    }
}