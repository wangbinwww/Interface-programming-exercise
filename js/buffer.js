const buf = Buffer.from('404000000159021c0a0d01140100000000000000000000000800021c01021c0a0d0114162323', 'hex');

//buff的输出形式
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));
console.log(buf.toString('ascii'));
console.log(buf);

//写入缓冲区
var buf1 = Buffer.alloc(256);
var len = buf1.write("88888888");
console.log("写入字节数 : " + len);
console.log(buf1.toString('utf8', 0, 9));

//从缓冲区读取数据
var buf2 = Buffer.alloc(26);
for (var i = 0; i < 26; i++) {
    buf2[i] = i + 97;
}
console.log(buf2.toString('ascii')); // 输出: abcdefghijklmnopqrstuvwxyz
console.log(buf2.toString('ascii', 0, 6)); //使用 'ascii' 编码, 并输出: abcde
console.log(buf2.toString('utf8', 0, 5)); // 使用 'utf8' 编码, 并输出: abcde
console.log(buf2.toString('hex'));
console.log(buf2.toString(undefined, 0, 5)); // 使用默认的 'utf8' 编码, 并输出: abcde