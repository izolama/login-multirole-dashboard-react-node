# Markdown
file markdown dapat kita simpan dengan ekstensi `.markdown` atau `.md`

contoh: `belajar-menulis.md` atau `belajar-menulis.markdown`

## Format Dasar Markdown 
Sekarang kita akan mencoba menulis format-format dasar markdown.

### Membuat Heading
Heading atau judul di markdown dapat dibuat dengan tanda `#` pagar. 

contoh :
# Heading 1
## Heading 2
### Heading 3

maka akan menghasilkan : 
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
Heading ini sampai level 6 seperti pada HTML , 
junlah tanda pagar di depannya menandakan levelnya.

Selain menggunaka tanda pagar, 
ada juga yang menggunakan simbol (`minus`) dan (`=`) seperti ini: 

Ini Heading Level 1
======================
    Ini paragraf, heading level 1 ...

Ini Heading Level 2
----------------------
    Ini paragraf, heading level 2 ...

# Format Teks
Jika kamu ingin menulis teks tebal, miring , 
dan strikline maka bisa dilakukan seperti ini :

**Tebal**
*miring*
~~strikeline~~

selain menggunakan tanda `*` untuk teks **tebal** dan *miring* bisa juga menggunakan `_` seperti ini :

__teks tebal__
_teks miring_

## Membuat Link
Link dapat kita buat dengan tanda kurung seperti in: 

[Linkkepetanikode](https:://www.javazol.com)

selain menggunakan tanda kurung , kita juga bisa membuat link langsung dengan menggunakan *URL* lengkapnya. 

contoh : https://www.javazol.com/

### Menyisipkan Gambar
Caranya hampir sama dengan membuat link. kita tinggal menambahkan tanda `!` didepannya .

contoh : ![Gambar teks editor VS Code](https://www.petanikode.com/img/markdown/markdown-vscode.png)


Membuat List
============
List dapat kita buat seperti ini : 

* Milk
* Bread
  * Wholegrain
* Butter

1. Tidy the kitchen
2. Prepare ingrdients
3. Cook delicious things

Untuk *unordered list* kita bisa menggunakan tanda bintan `*` dan juga `-`

contoh : 

- item1
- item2
- item3

Membuat Todo List Atau Checklist
--------------------------------
**Tugas hari ini:**

- [x] Menulis artikel tentang markdown
- [ ] Belajar Git di petanikode
- [ ] Belajar bahasa pemrograman rust
- [x] Membuat template blog dengan boostrap

# Menyisipkan Quote
Pada HTML kita mengenal tag `<blockqoute>` untuk membuat kutipan. Pada Markdown, kita bisa membuat `(>)` seperti ini : 

> to be or not to be, that is the question.

# Format Markdown Tingkat Lanjut
Format *markdown* yang baru kita pelajari adalah format dasar yang harus diingat. Masih ada beberapa format lagi :

## Menulis Inlin Code
Inlin code sangat sering saya gunakan dalam teks. Cara membuatnya dengan menggunakan tanda (``).

contoh :
Perintah `api-get` adalah perintah untuk menginstall paket di ubuntu.

## Menulis Source Code
*Source Code* sering saya tulis dengan *markdown*. Lalu menggunakan https://prismjs.com/ untuk *syntax highlighting* .

```java
class HelloWorld{
    public static void main(String[] argumen){
        System.out.println("Hello World");
    }
}
```
Tanda `( ``` )` berfungsi untuk menulis *source code* lalu pada pembuka tambahkan **bahasa** agar teksnya berwarna (*syntax highlingting*).

## Membuat Tabel
Tabel di *markdown* dapat dibuat dengan cara seperti ini : 

| name | age | address | phone |
| ---- | --- | ------- | ----- |
| jhon | 12 | jakarta | 1234   |
| jasmine | 19 | bandung | 1234 |

## Membuat Garis Horizontal
Garis horizontal atau `<hr>`, dapat kita buat dengan tanda `---`

Contoh : 

Ini paragraf pertama ...

---

Ini paragraf kedua ...


## Bagaimana Cara Menghafal Markdown ? 
check this link https://github.com/ardianta/blog/tree/master/content