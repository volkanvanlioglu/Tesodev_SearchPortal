<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Results.aspx.cs" Inherits="Results" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link href="css/results.css" rel="stylesheet" />
    <link href="Content/bootstrap.min.css" rel="stylesheet" />
    <title>Results Page</title>
</head>
<body style="background-image: url('http://localhost:60110/img/night.png'); background-size: cover; background-repeat: no-repeat; height: 100vh; display: flex;">
    <div class="container2">
        <div class="inner" runat="server" id="results">
            <table class="results_header">
                <tr>
                    <th onmouseover="SortByName()" onmouseout="SortByName()">Name</th>
                    <th onmouseover="SortBySurname()" onmouseout="SortByName()">Surname</th>
                    <th onmouseover="SortBySex()" onmouseout="SortByName()">Sex</th>
                    <th onmouseover="SortByAge()" onmouseout="SortByName()">Age</th>
                    <th onmouseover="SortByNationality()" onmouseout="SortByName()">Nationality</th>
                </tr>
            </table>
        </div>
        <div class="pagination" id="pagination" runat="server"></div>
    </div>
    <script src="js/Results.js"></script>
</body>
</html>