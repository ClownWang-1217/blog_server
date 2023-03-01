# 第一步生成公钥，私钥
ssh-keygen -t ed25519 -C "wt449127919@gmail.com"
# 会弹出如下提示
Generating public/private ed25519 key pair.
Enter file in which to save the key (/Users/caleb/.ssh/id_ed25519):
# 输入文件路径和文件名
Enter file in which to save the key (/Users/caleb/.ssh/id_ed25519):ssh

Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in ssh
Your public key has been saved in ssh.pub
The key fingerprint is:
SHA256:6mCMMzYNiUrDnRpURXNd+yRtJ4I6LDai6MZ9Fgn8gxw wt449127919@gmail.com
The key's randomart image is:
+--[ED25519 256]--+
|   .o+ .. ..     |
|  .   o  .. o    |
| ..      . + = . |
|o..E. . .   * o  |
|.=++=+.+S    .   |
|+ =Bo=o..        |
|+oB = +          |
|.+ * =           |
|..  o .          |
+----[SHA256]-----+

# 设置git全局用户名和邮箱（这里的名字都是注册github时用的） 这里要注意去掉双引号
git config --global user.name “yourname”
git config --global user.email “email@email.com”

# 如果不清楚当前的用户名和邮箱使用git config --global --list查看当前git配置
git config --global --list

core.excludesfile=/Users/caleb/.gitignore_global
difftool.sourcetree.cmd=opendiff "$LOCAL" "$REMOTE"
difftool.sourcetree.path=
mergetool.sourcetree.cmd=/Applications/Sourcetree.app/Contents/Resources/opendiff-w.sh "$LOCAL" "$REMOTE" -ancestor "$BASE" -merge "$MERGED"
mergetool.sourcetree.trustexitcode=true
user.name=ClownWang-1217
user.email=wt449127919@gmail.com
commit.template=/Users/caleb/.stCommitMsg
http.sslverify=false
http.version=HTTP/1.1
http.postbuffer=524288000

# 查看是否链接github成功
ssh -T git@github.com
# 出现如下log 便是成功
Hi ClownWang-1217! You've successfully authenticated, but GitHub does not provide shell access.
