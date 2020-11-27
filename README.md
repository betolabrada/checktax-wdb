# CheckTax WDB Sistemas
Setup ATP OCI connection (WINDOWS):
  1. Install the instant client of Oracle https://www.oracle.com/database/technologies/instant-client/winx64-64-downloads.html
  2. Create an "oracle" directory on your hard drive and unzipp the client there, your path directory should look like this: C:\oracle\instantclient_19_8
  3. Add this path tou your PATH system (enviroment variable).
  4. Download the Visual Studio redistributable base on the oracle client and Windows you have https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads
  5. Once the download is done reboot your machine.
  6. Ask to the administrator for the Wallet of the ATP.
  7. Once you have the Wallet, create a directory inside the client called "network".
  8. Inside network add a new directory called "admin" and unzipp the Wallet directory here, your path to Wallet should look like this: C:\oracle\instantclient_19_8\network\admin\Wallet
  9. Change the directory in the file "sqlnet.ora" to the path of this directory, should now look like this: (METHOD_DATA = (DIRECTORY="?/network/admin/Wallet"))).
  10. Add to the env variables in the server (The configuration is in base of the Wallet):
    TNS_ADMIN=C:/oracle/instantclient_19_8/network/admin/Wallet
    ORCL_USER=user
    ORCL_PASSWORD=password
    ORCL_CONN=atp_high
   11. Test the connection and everything should work!
