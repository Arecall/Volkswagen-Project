var sql=require('mssql');

//连接方式1："mssql://用户名:密码@ip地址（无需端口号）/SqlServer名/数据库名称"
//连接方式2："mssql://用户名:密码@ip地址:1433(默认端口号)/数据库名称"

sql.connect("mssql://MicrosoftAccount\1156322837@qq.com/TVs").then(function(){
    new sql.Request().query('select *from dbo.login').then(function(recordset){
        console.log(recordset);
    }).catch(function(err){
        console.log(err);
    });
}).catch(function(err){
    console.log(err);
});