(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{407:function(t,a,s){t.exports=s.p+"assets/img/apache-start.82b13324.png"},408:function(t,a,s){t.exports=s.p+"assets/img/site-80.7a41e96d.png"},409:function(t,a,s){t.exports=s.p+"assets/img/site-81.19ee5e97.png"},444:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"apache-を触ってみよう"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apache-を触ってみよう"}},[t._v("#")]),t._v(" Apache を触ってみよう")]),t._v(" "),e("h2",{attrs:{id:"事前準備"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事前準備"}},[t._v("#")]),t._v(" 事前準備")]),t._v(" "),e("p",[t._v("以下のように"),e("code",[t._v("docker pull")]),t._v("をしておいてください。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker pull python:3.8.2-buster\n")])])]),e("h2",{attrs:{id:"apacheとは"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apacheとは"}},[t._v("#")]),t._v(" Apacheとは")]),t._v(" "),e("p",[t._v("「Apache HTTP Server」はnginxと並んで2台勢力を誇っているWebサーバソフトウェアのひとつです。\nCentOSではhttpdという名前になっていたり、単にApacheと呼ばれます。")]),t._v(" "),e("p",[t._v("Webサーバソフトウェアとは、HTTPリクエストを受けて何らかのレスポンスを返すソフトウェアのことで、たとえばHTMLファイルなどをブラウザに返すなどの役割を持っています。\nWebを扱ううえでほぼ必ず必要になる、現代に欠かせないソフトウェアです。")]),t._v(" "),e("h3",{attrs:{id:"webサーバソフトウェアのユースケース"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webサーバソフトウェアのユースケース"}},[t._v("#")]),t._v(" Webサーバソフトウェアのユースケース")]),t._v(" "),e("p",[t._v("ApacheやnginxといったWebサーバの役割を並べてみると、以下のようになります。")]),t._v(" "),e("ul",[e("li",[t._v("HTMLやテキストファイルの配信")]),t._v(" "),e("li",[t._v("動的アプリケーションのホスティング\n"),e("ul",[e("li",[t._v("jsonを返すようなWeb APIを含む")])])]),t._v(" "),e("li",[t._v("リクエストを中継するプロキシ")]),t._v(" "),e("li",[t._v("Basic認証などによる認証処理")]),t._v(" "),e("li",[t._v("ACLなどのアクセス制御・不正な通信への防御")])]),t._v(" "),e("p",[t._v("一番初めのWebサーバの役割は、HTTPのリクエストを受け取りそれに対応するHTMLファイルを返すことでした。\n今でも大半の役割がこれです。それに付随して認証処理やアクセス制御といったセキュリティ的な役割も持つようになります。")]),t._v(" "),e("p",[t._v("その後CGI(Perl)というしくみが登場し、静的なファイルだけではなく動的にページを生成しそれを返す役割を持つようになりました。\n現在はPerlが使われることはめったにありませんが、PHPやRuby・Pythonなどの言語で書かれたプログラムを使って動的なページを扱うことができます。")]),t._v(" "),e("p",[t._v("最近では動的なページ生成を行うプログラムは別で立て、Webサーバはそこに対してリクエストを中継するだけという使われ方も増えてきました。\nこの時Webサーバは不正なリクエストを弾いたり、後段のアプリケーションの負荷分散や冗長性の確保といった役割を持ちます。\n（ほかにもroutingやlogging、アクセス管理などWebサーバに求められる基本的な機能を提供してくれます。）")]),t._v(" "),e("h3",{attrs:{id:"動的アプリケーションのホスティングとモジュール"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#動的アプリケーションのホスティングとモジュール"}},[t._v("#")]),t._v(" 動的アプリケーションのホスティングとモジュール")]),t._v(" "),e("p",[t._v("Apacheやnginxにはモジュールと呼ばれる、いわゆるプラグインのしくみがあります。\nさまざまなモジュールが存在していますが、動的アプリケーションのホスティングもこのモジュールを使ってツールを読み込むことで実現します。")]),t._v(" "),e("p",[t._v("PythonやJavaといったWebアプリケーションをモジュールから動作させる大きな利点として、プロセス管理をApacheに任せられることがあります。\nPythonなどの言語は基本的にシングルプロセスで動作するため、同時に多くのリクエストをさばく必要のあるWebアプリケーションとして動作させるには、何らかの方法でマルチプロセス化する必要があります。\nApacheには多くのリクエストをさばくためpre-forkなどのマルチプロセスを管理するしくみが備わっています。ApacheのモジュールからWebアプリケーションを実行することで、Apacheによるプロセス管理の恩恵に預かることができます。")]),t._v(" "),e("p",[t._v("別の手段として、"),e("a",{attrs:{href:"https://yhbt.net/unicorn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unicorn(ruby)"),e("OutboundLink")],1),t._v("や"),e("a",{attrs:{href:"https://gunicorn.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gunicorn(Python)"),e("OutboundLink")],1),t._v("といったツールでマルチプロセス対応をする。あるいはGo言語など初めから並列処理を前提にした言語の場合はApacheでプロセス管理を行う必要はありません。")]),t._v(" "),e("p",[t._v("その場合Webサーバはプロキシとしての役割に集中することとなります。")]),t._v(" "),e("h3",{attrs:{id:"apacheの立ち位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apacheの立ち位置"}},[t._v("#")]),t._v(" Apacheの立ち位置")]),t._v(" "),e("p",[t._v("Apacheは「Apacheソフトウェア財団」によって管理されるOSSで、20年以上の歴史を持ちます。\n世界的にもっとも普及したWebサーバで、LAMP（Linux, Apache, MySQL, PHP）環境のひとつにも挙げられます。")]),t._v(" "),e("p",[t._v("以前は大量のリクエストを受けた際にプロセスをforkできず、リクエストを捌き切れなくなる（いわゆるC10K問題）ことが問題視されました。\nその際nginxをはじめとして新しいWebサーバーソフトウェアが登場しましたが、Apache自体もworkerやevent MPMといった新しい仕組みを導入し、動作も安定していることからいまだに高いシェアを占めています。")]),t._v(" "),e("p",[t._v("参考: "),e("a",{attrs:{href:"https://news.netcraft.com/archives/2020/02/20/february-2020-web-server-survey.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("February 2020 Web Server Survey"),e("OutboundLink")],1),t._v(")")]),t._v(" "),e("h2",{attrs:{id:"apacheをインストールして立ち上げる"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apacheをインストールして立ち上げる"}},[t._v("#")]),t._v(" Apacheをインストールして立ち上げる")]),t._v(" "),e("p",[t._v("なにはともあれ動かしてみましょう。今回はdebianをdockerで立ち上げてその中にApacheをインストールしてみます。")]),t._v(" "),e("p",[t._v("まずは以下のようにdockerコンテナの中に入ります。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker run --rm -itd --name test-debian -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v(":80 -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8081")]),t._v(":81 python:3.8.2-buster /bin/bash\ndocker "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it test-debian /bin/bash\n")])])]),e("p",[t._v("入れたら"),e("code",[t._v("apt install")]),t._v("を使ってApacheをインストールしてみましょう。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Get:1 http://security.ubuntu.com/ubuntu focal-security InRelease [107 kB]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Get:2 http://security.ubuntu.com/ubuntu focal-security/restricted amd64 Packages [4673 B]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Get:3 http://security.ubuntu.com/ubuntu focal-security/main amd64 Packages [60.9 kB]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Get:4 http://security.ubuntu.com/ubuntu focal-security/universe amd64 Packages [8273 B]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#~~~略~~~")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y apache2 apache2-dev "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Reading package lists... Done")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Building dependency tree")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Reading state information... Done")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#~~~略~~~")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Updating certificates in /etc/ssl/certs...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#0 added, 0 removed; done.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Running hooks in /etc/ca-certificates/update.d...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#done.")]),t._v("\n")])])]),e("p",[t._v("途中でtimezoneなどを聞かれたら"),e("code",[t._v("Asia")]),t._v("や"),e("code",[t._v("Tokyo")]),t._v("を選んでください。以下のようにバージョンを表示できれば成功です。")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("apache2 -v\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Server version: Apache/2.4.38 (Debian)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Server built:   2019-10-15T19:53:42")]),t._v("\n")])])]),e("p",[t._v("以下のようにApacheを起動してください。")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" apache2 start\n")])])]),e("p",[t._v("ブラウザを開いて"),e("code",[t._v("localhost:8080")]),t._v("にアクセスしてみてください。以下のような画面が表示されれば成功です。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(407),alt:"apache-start"}})]),t._v(" "),e("h2",{attrs:{id:"htmlファイルの配信-check1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#htmlファイルの配信-check1"}},[t._v("#")]),t._v(" HTMLファイルの配信 (check1)")]),t._v(" "),e("p",[t._v("表示されたページはデフォルトのHTMLファイルです。これを自分で作成したページに置き換えてみます。\nデフォルトではDocument Rootは"),e("code",[t._v("/var/www/html/")]),t._v("に設定されています。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Document RootはApacheが静的ファイルを配信するためのroot directryです。")])]),t._v(" "),e("p",[t._v("この下にある"),e("code",[t._v("index.html")]),t._v("ファイルを自分の物に置き換えてみましょう。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /var/www/html/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" index.html _index.html\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello Bootcamp!!'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" index.html\n")])])]),e("p",[t._v("再び"),e("code",[t._v("http://localhost:8080/")]),t._v("を開くと"),e("code",[t._v("Hello Bootcamp!!")]),t._v("が表示されるのを確認してください。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[e("code",[t._v("http://localhost:8080/")]),t._v(" のようにファイル名を指定せずディレクトリ（この場合はルートディレクトリ）を指定した場合、Apacheは"),e("code",[t._v("index.html")]),t._v("を返すようにデフォルトで設定されています。\nこの設定は変更できます。")])]),t._v(" "),e("p",[t._v("Document root配下にディレクトリを作成するとブラウザからも同様にアクセスできます。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /var/www/html/hoge\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello HUGA!!'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /var/www/html/hoge/huga.txt\n")])])]),e("p",[e("code",[t._v("http://localhost:8080/hoge/huga.txt")]),t._v(" にアクセスすると追加したファイルが表示されます。")]),t._v(" "),e("h2",{attrs:{id:"virtualhost-の設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#virtualhost-の設定"}},[t._v("#")]),t._v(" VirtualHost の設定")]),t._v(" "),e("p",[t._v("1つのApacheで複数のWebサイトを管理したいことがあります。異なるIPアドレスやアドレス、port番号からアクセスされた時にDocument Rootなどを切り替えたいときは"),e("code",[t._v("VirtualHost")]),t._v("を設定することで実現できます。")]),t._v(" "),e("p",[t._v("ここではport番号を"),e("code",[t._v("80")]),t._v("と"),e("code",[t._v("81")]),t._v("に分けて別々のWebサイトを設定してみます。\n(docker起動時にport forwardしているため、手元からは"),e("code",[t._v("8080")]),t._v("と"),e("code",[t._v("8081")]),t._v("からアクセスできます。)")]),t._v(" "),e("p",[t._v("まずは新しくDocument RootになるディレクトリとHTMLファイルを作成します。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /var/www/html/site-80\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /var/www/html/site-81\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'This is site 80!'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /var/www/html/site-80/index.html\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'This is site 81!'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /var/www/html/site-81/index.html\n")])])]),e("p",[t._v("次にApacheの設定をして行きます。やることは")]),t._v(" "),e("ul",[e("li",[t._v("listen portに81を追加")]),t._v(" "),e("li",[t._v("virtual host設定の追加")])]),t._v(" "),e("p",[t._v("の2つです。listen portの追加は"),e("code",[t._v("/etc/apache2/ports.conf")]),t._v("に書きましょう。\n以下のように"),e("code",[t._v("Listen 80")]),t._v(" の下に "),e("code",[t._v("Listen 81")]),t._v("の記述を追加します。")]),t._v(" "),e("div",{staticClass:"language-apache extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# If you just change the port or add more ports here, you will likely also\n# have to change the VirtualHost statement in\n# /etc/apache2/sites-enabled/000-default.conf\n\nListen 80\nListen 81\n\n<IfModule ssl_module>\n        Listen 443\n</IfModule>\n\n<IfModule mod_gnutls.c>\n        Listen 443\n</IfModule>\n\n# vim: syntax=apache ts=4 sw=4 sts=4 sr noet\n")])])]),e("p",[t._v("VitrualHostの設定は"),e("code",[t._v("/etc/apache2/sites-available")]),t._v("の下に作成して行きます。")]),t._v(" "),e("p",[e("code",[t._v("/etc/apache2/sites-available/site-80.conf")])]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("VirtualHost")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("*:")]),t._v("80")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  DocumentRoot /var/www/html/site-80\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("VirtualHost")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[e("code",[t._v("/etc/apache2/sites-available/site-81.conf")])]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("VirtualHost")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("*:")]),t._v("81")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  DocumentRoot /var/www/html/site-81\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("VirtualHost")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("設定ファイルを作成したら"),e("code",[t._v("a2dissite")]),t._v("、"),e("code",[t._v("a2ensite")]),t._v("コマンドを使って設定を有効化しましょう。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[e("code",[t._v("a2dissite")]),t._v("や"),e("code",[t._v("a2ensite")]),t._v("といったコマンドは実はapache本体の機能ではありません。"),e("code",[t._v("a2ensite")]),t._v("は"),e("code",[t._v("/etc/apache2/sites-available")]),t._v("以下のファイルのsimlinkを"),e("code",[t._v("/etc/apache2/sites-enable")]),t._v("以下に追加するだけのコマンドです。\n実際のApacheは"),e("code",[t._v("/etc/apache2/sites-enable")]),t._v("以下のコンフィグファイルをloadしているため、コマンドによってサイトが有効化されたように見えるのです。")]),t._v(" "),e("p",[t._v("CentOSなど他のディストリビューションでは、これらのコマンドが存在しないことが多いので注意してください。")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("a2dissite 000-default\na2ensite site-80\na2ensite site-81\n")])])]),e("p",[t._v("そしてApacheをリスタートします。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" apache2 reload\n")])])]),e("p",[e("code",[t._v("localhost:8080")]),t._v("と"),e("code",[t._v("localhost:8081")]),t._v("にアクセスしてみてください。意図通りの挙動になっているでしょうか。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("img",{attrs:{src:s(408),alt:"site-80"}})])])]),t._v(" "),e("tbody")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("img",{attrs:{src:s(409),alt:"site-81"}})])])]),t._v(" "),e("tbody")]),t._v(" "),e("h2",{attrs:{id:"basic-認証をかけてみる-check2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-認証をかけてみる-check2"}},[t._v("#")]),t._v(" Basic 認証をかけてみる(check2)")]),t._v(" "),e("p",[t._v("特定ディレクトリにアクセスできる人を制限するために、Basic認証をかけてみましょう。\nBasic認証用のmoduleが既にインストールされているはずなので、有効化します。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("a2enmod auth_basic\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -l /etc/apache2/mods-enabled/auth_basic.load "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#確認")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#lrwxrwxrwx 1 root root 33 May 10 23:22 /etc/apache2/mods-enabled/auth_basic.load -> ../mods-available/auth_basic.load")]),t._v("\n")])])]),e("p",[t._v("まずはパスワードが記載された"),e("code",[t._v(".htpasswd")]),t._v("ファイルを作成します。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /etc/apache2/auth/\nhtpasswd -c /etc/apache2/auth/.htpasswd admin\n")])])]),e("p",[e("code",[t._v("admin")]),t._v("がユーザ名になります。パスワードの入力を求められるので、適当に設定してください。")]),t._v(" "),e("p",[t._v("次に"),e("code",[t._v("/etc/apache2/sites-available/site-81.conf")]),t._v("を以下のように編集します。")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("VirtualHost")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("*:")]),t._v("81")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n  DocumentRoot /var/www/html/site-81\n  <Directory "/var/www/html/site-81">\n    AuthUserFile /etc/apache2/auth/.htpasswd\n    AuthName "site-81 Authorization"\n    AuthType Basic\n    Require valid-user\n  '),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Directory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("VirtualHost")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("ファイルを編集したら"),e("code",[t._v("service apache2 restart")]),t._v("で再起動しましょう。"),e("code",[t._v("localhost:8081")]),t._v("にアクセスしてみてください。パスワードが求められ、先ほど入力した認証情報を入れないとアクセスできなくなっているはずです。")]),t._v(" "),e("h2",{attrs:{id:"pythonアプリを動かしてみよう-check3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pythonアプリを動かしてみよう-check3"}},[t._v("#")]),t._v(" Pythonアプリを動かしてみよう(check3)")]),t._v(" "),e("p",[t._v("ここまではVirtualHostでリソースを管理しつつ、静的なファイルを配信する設定を作ってきました。この章では別のユースケースとして、Pythonで書かれたWebアプリをApache経由で動かす設定を作ってみます。")]),t._v(" "),e("p",[t._v("このdocker imageには既にpythonがインストールされています。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("python --version\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Python 3.8.2")]),t._v("\n")])])]),e("p",[t._v("Pythonで作成したWebアプリをApacheなどから実行する場合、"),e("a",{attrs:{href:"https://ja.wikipedia.org/wiki/Web_Server_Gateway_Interface",target:"_blank",rel:"noopener noreferrer"}},[t._v("WSGI"),e("OutboundLink")],1),t._v("というインタフェース定義に従ってWebアプリを作成します。\nこれはPython側のインタフェースを規定することで、他のプログラム(今回の場合Apache)から呼び出しやすくする物です。")]),t._v(" "),e("p",[t._v("あとでやるDjangoなど主要なPythonフレームワークはこのAPIに従っているため、Djangoで作成したアプリは今回と同じ手順でApacheから実行することができます。")]),t._v(" "),e("p",[t._v("以下のようなPythonコードを"),e("code",[t._v("/var/www/html/site-80")]),t._v("以下に置いておきましょう。")]),t._v(" "),e("p",[e("code",[t._v("vim /var/www/html/site-80/app.py")])]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("application")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("environ"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start_response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    status "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200 OK'")]),t._v("\n    output "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("b'Hello! This is python application!'")]),t._v("\n\n    response_headers "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-type'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/plain'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Length'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("output"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    start_response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response_headers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("output"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[t._v("次にwsgiを動かすためのApache moduleをインストールします。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("pip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" mod-wsgi\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Collecting mod-wsgi")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  Using cached mod_wsgi-4.7.1.tar.gz (498 kB)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Building wheels for collected packages: mod-wsgi")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  Building wheel for mod-wsgi (setup.py) ... done")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  Created wheel for mod-wsgi: filename=mod_wsgi-4.7.1-cp38-cp38-linux_x86_64.whl size=809821 sha256=570b19e67813e819f04ee00006b5c556339e37a03dea4af0021837b098588c0d")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  Stored in directory: /root/.cache/pip/wheels/e9/82/71/1b42d6274a24af477453cecc993213fc8abd15433d80b01e93")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Successfully built mod-wsgi")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Installing collected packages: mod-wsgi")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Successfully installed mod-wsgi-4.7.1")]),t._v("\n")])])]),e("p",[t._v("インストールすると以下のディレクトリにsoファイルが生成されています。Apacheに読み込ませる必要があるため確認しておきましょう。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" /usr/local/lib/python3.8/site-packages/mod_wsgi/server/mod_wsgi-py38.cpython-38-x86_64-linux-gnu.so\n")])])]),e("p",[t._v("このファイルを読み込むように、"),e("code",[t._v("vim /etc/apache2/mods-available/wsgi.load")]),t._v("を以下のように作成します。")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("LoadModule wsgi_module /usr/local/lib/python3.8/site-packages/mod_wsgi/server/mod_wsgi-py38.cpython-38-x86_64-linux-gnu.so\n")])])]),e("p",[t._v("moduleを有効化しておきます。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("a2enmod wsgi\n")])])]),e("p",[t._v("準備が整ったのでsite-80に先ほどのPythonアプリケーションを読み込ませましょう。\n"),e("code",[t._v("vim /etc/apache2/sites-available/site-80.conf")])]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("VirtualHost")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("*:")]),t._v("80")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  DocumentRoot /var/www/html/site-80\n  WSGIScriptAlias /app /var/www/html/site-80/app.py\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("VirtualHost")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("最後にApacheをリスタートします。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" apache2 restart\n")])])]),e("p",[e("code",[t._v("http://localhost:8080/app")]),t._v(" にアクセスしてみてください。"),e("code",[t._v("Hello! This is python application!")]),t._v(" が表示されるでしょうか。")]),t._v(" "),e("p",[t._v("うまくいったら"),e("code",[t._v("app.py")]),t._v("を適当に変更して、Pythonが動的に実行されているのを確認してください。")]),t._v(" "),e("h2",{attrs:{id:"パフォーマンス測定（任意課題）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#パフォーマンス測定（任意課題）"}},[t._v("#")]),t._v(" パフォーマンス測定（任意課題）")]),t._v(" "),e("p",[t._v("ApacheにはApache Benchというパフォーマンス測定ツールがついています。これを使ってMPMの違いがどのようにパフォーマンスに影響するか確認してみましょう。")]),t._v(" "),e("p",[t._v("Apache Benchは"),e("code",[t._v("ab")]),t._v("コマンドで使用できます。試しに先ほどのPythonアプリケーションのパフォーマンスを測定してみましょう。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("ab -n "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" -c "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" localhost:80/app\n")])])]),e("p",[t._v("これは"),e("code",[t._v("localhost:80/app")]),t._v("に対して合計10000リクエストを同時に100ずつ実行するコマンドです。\n実行結果には成功したリクエスト数や処理時間など、分析に使える情報が書かれています。")]),t._v(" "),e("p",[t._v("同時に1000リクエストを投げても、この時点では捌けていると思います。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("ab -n "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" -c "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" localhost:80/app\n")])])]),e("p",[t._v("これだけでは面白くないので、pythonアプリにわざとディレイを入れてみましょう。")]),t._v(" "),e("p",[e("code",[t._v("vim /var/www/html/site-80/app.py")])]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("application")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("environ"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start_response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    time"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    status "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200 OK'")]),t._v("\n    output "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("b'Hello! Thisa is python application!'")]),t._v("\n\n    response_headers "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-type'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/plain'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Length'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("output"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    start_response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response_headers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("output"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[t._v("保存したらもう一度")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("ab -n "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" -c "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" localhost:80/app\n")])])]),e("p",[t._v("を試してみましょう。理論上は3秒で全部のリクエストが成功するはずですがどうでしょうか。\nさらにもっと数を増やすとどうでしょうか。")]),t._v(" "),e("p",[t._v("他にも色んなことを試してみてください。")]),t._v(" "),e("ul",[e("li",[t._v("psコマンドでApacheのプロセスを確認して、リクエスト中に何が起こってるのか確認しましょう。\n"),e("ul",[e("li",[t._v("apache の再起動直後とパフォーマンス測定後の変化を見てみましょう")])])]),t._v(" "),e("li",[e("code",[t._v("/var/log/apache2/error.log")]),t._v(" を確認してみましょう")]),t._v(" "),e("li",[t._v("MPM(Multi-Processing-Module)をpreforkやworkerに変えるとどうなるでしょうか")]),t._v(" "),e("li",[t._v("MPMの設定を変えてパフォーマンスチューニングをしてみましょう")])]),t._v(" "),e("h3",{attrs:{id:"補足-mpmの変更"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#補足-mpmの変更"}},[t._v("#")]),t._v(" 補足: MPMの変更")]),t._v(" "),e("p",[t._v("現在のMPMの確認")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("apachectl -V "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" MPM\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Server MPM:     event")]),t._v("\n")])])]),e("p",[t._v("MPMをpreforkに変更する。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("a2dismod mpm_event\na2enmod mpm_prefork\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" apache2 restart\napachectl -V "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" MPM\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Server MPM:     prefork")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);