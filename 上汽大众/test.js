var sql=require('mssql');

//���ӷ�ʽ1��"mssql://�û���:����@ip��ַ������˿ںţ�/SqlServer��/���ݿ�����"
//���ӷ�ʽ2��"mssql://�û���:����@ip��ַ:1433(Ĭ�϶˿ں�)/���ݿ�����"

sql.connect("mssql://MicrosoftAccount\1156322837@qq.com/TVs").then(function(){
    new sql.Request().query('select *from dbo.login').then(function(recordset){
        console.log(recordset);
    }).catch(function(err){
        console.log(err);
    });
}).catch(function(err){
    console.log(err);
});