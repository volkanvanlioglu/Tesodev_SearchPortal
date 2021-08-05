<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Main.aspx.cs" Inherits="Main" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <style>
        .matchlist{
            background-color:#FFF;
            padding:2px;
            border-radius:5px;
        }
    </style>
    <title>Main Page</title>
    <link href="Content/bootstrap.min.css" rel="stylesheet" />
</head>
<body style="background-image:url('http://localhost:60110/img/night.png'); background-size:cover; background-repeat:no-repeat; height:100vh; display:flex;">
    <div class="container mt-5">
        <div class="col-md-6" style="left:50%; top:50%; width:80%; height:80%; transform:translate(-50%,-50%);">
            <h3 class="text-center mb-3">Search...</h3>
            <div class="form-group">
                <input type="text" id="search" placeholder="Search..." class="form-control form-control-lg" />
            </div>
            <div class="matchlist" id="matchlist"></div>
        </div>
    </div>
    <script src="js/Main.js"></script>
</body>
</html>
