# Discord Ahriman2K

![Ahriman2K](https://i.hizliresim.com/9CD4he.png)

Ahriman2K Davet Bağlantısı: [Bana Tıkla!](https://discord.com/api/oauth2/authorize?client_id=701529204101087252&permissions=8&scope=bot)

## Bot'un içerisindeki komutlar
```bash
*avatar [Kullanıcı]
*ban [@Kullanıcı / ID] [Sebep]
*davet
*kick [@Kullanıcı / ID] [Sebep]
*kullanicibilgi [Kullanıcı]
*oylama [Konu Başlığı]
*ping
*prefix [Yeni Prefix]
*reklamtaramasi
*rolliste
*rolver [@Kullanıcı] [@Rol]
*sil [1-100]
*sunucubilgi
*söyle [Söylenecek Şey]
*wiki [İngilizce Konu Başlığı]
*yardım
*yavasmod [Saniye]
*çaysöyle [@Kullanıcı]
*öp [@Kullanıcı]
*ayetler [bölüm-no] // Bu komut orijinal botta vardır.
```

## Kurulum

Öncelikle, dosyaları kendi bilgisayarınıza indirmeniz gerek. Bunun için aşşağıdaki komutu kullanın. Klasöre girin ve tüm paketleri indirin.

```bash
git clone https://github.com/cure2k/Ahriman2K-Discord.git
cd Ahriman2K-Discord/
sudo npm install
```

## Kurulum

Kurulumu Yapmadan önce Discord botunuzu, "Discord Developer" alanından açmanız gerekmekte. Botu çalıştırmanız için yapmanız gereken tek şey, "botconfig.json" dosyasının kendisini düzenlemeniz olacaktır.

```json
{
    "token": "[TOKEN]",
    "prefix": "*"
}
```

[TOKEN] alanında, kendi botunuzun tokenini yazıp daha sonrasında botu başlatabilirsiniz.

## Botu Başlatmak

Tüm her şeyi gözden geçirdikten sonra kurulum yaptığınız terminal ekranına dönüp aşşağıdaki komutu yazmanız yeterli olacaktır.

```bash
node index.js
```

Daha sonrasında, Bot kendini tamamen aktif ettiğinde size bir bildirim ile sunacaktır.

Örnek bot yanıtı:
```bash
┌─[✗]─[cure2k@parrot]─[~/Desktop/Dini İnanç Öğreti]
└──╼ $node index.js 
avatar.js yüklendi!
ban.js yüklendi!
davet.js yüklendi!
kick.js yüklendi!
kullanicibilgi.js yüklendi!
oylama.js yüklendi!
ping.js yüklendi!
prefix.js yüklendi!
reklamtara.js yüklendi!
rolliste.js yüklendi!
rolver.js yüklendi!
sil.js yüklendi!
sunucubilgi.js yüklendi!
söyle.js yüklendi!
wiki.js yüklendi!
yardım.js yüklendi!
yavasmod.js yüklendi!
çaysöyle.js yüklendi!
öp.js yüklendi!
-------------------------------------
Ahriman2K şu anda aktif.
```

## Lisans
[MIT](https://choosealicense.com/licenses/mit/)
