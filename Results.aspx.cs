using System;
using System.Linq;

public partial class Results : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        string names = Request.QueryString["names"];
        string surnames = Request.QueryString["surnames"];
        string sexes = Request.QueryString["sexes"];
        string ages = Request.QueryString["ages"];
        string nationalities = Request.QueryString["nationalities"];
        int page = Convert.ToInt32(Request.QueryString["page"]);

        string[] names_ = names.Split(',');
        string[] surnames_ = surnames.Split(',');
        string[] sexes_ = sexes.Split(',');
        string[] ages_ = ages.Split(',');
        string[] nationalities_ = nationalities.Split(',');

        if (names_.Length > 3)
        {
            results.InnerHtml += "<table class='results_table'>";

            for (var n = (3*page-3); n <= (3*page-1); n++)
            {
                if (n < names_.Length)
                {
                    results.InnerHtml +=
                    "<tr><td class='names'>" + names_[n] +
                    "</td><td class='surnames'>" + surnames_[n] +
                    "</td><td class='sexes'>" + sexes_[n] +
                    "</td><td class='ages'>" + ages_[n] +
                    "</td><td class='nationalities'>" + nationalities_[n] +
                    "</td></tr>";
                }
                else
                {
                    continue;
                }
            }

            results.InnerHtml += "</table>";

            if(page == 1)
            {
                pagination.InnerHtml += "<nav aria-label='Pages'><ul class='pagination'><li class='page-item'><a class='page-link' href='#'>Previous</a></li>";
            }
            else if (page > 1)
            {
                pagination.InnerHtml += "<nav aria-label='Pages'><ul class='pagination'><li class='page-item'><a class='page-link' href='Results.aspx?names=" + names + "&surnames=" + surnames + "&sexes=" + sexes + "&ages=" + ages + "&nationalities=" + nationalities + "&page=" + (page - 1) + "'>Previous</a></li>";
            }

            for (var n = 0; n < Convert.ToInt32(Math.Ceiling(Decimal.Divide(names_.Length,3))); n++)
            {
                pagination.InnerHtml += "<li class='page-item'><a class='page-link' href ='Results.aspx?names="+ names +"&surnames="+ surnames + "&sexes=" + sexes + "&ages=" + ages + "&nationalities=" + nationalities + "&page=" +(n+1)+"'>" + (n+1) + "</a></li>";
            }

            if (page < Convert.ToInt32(Math.Ceiling(Decimal.Divide(names_.Length, 3))))
            {
                pagination.InnerHtml += "<li class='page-item'><a class='page-link' href='Results.aspx?names=" + names + "&surnames=" + surnames + "&sexes=" + sexes + "&ages=" + ages + "&nationalities=" + nationalities + "&page=" + (page + 1) + "'>Next</a></li></ul></nav>";
            }
            else if (page == Convert.ToInt32(Math.Ceiling(Decimal.Divide(names_.Length, 3))))
            {
                pagination.InnerHtml += "<li class='page-item'><a class='page-link' href='#'>Next</a></li></ul></nav>";
            }
        }
    }
}