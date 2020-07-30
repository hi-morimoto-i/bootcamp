(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{448:function(v,a,_){"use strict";_.r(a);var t=_(42),e=Object(t.a)({},(function(){var v=this,a=v.$createElement,_=v._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("header-table"),v._v(" "),_("h1",{attrs:{id:"サーバアプリケーション界隈概要"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#サーバアプリケーション界隈概要"}},[v._v("#")]),v._v(" サーバアプリケーション界隈概要")]),v._v(" "),_("p",[v._v("ここでいうサーバアプリケーションとは、Webアプリケーションを構成する要素の中のサーバサイドの実装技術のことをなんとなく表現しています。")]),v._v(" "),_("h2",{attrs:{id:"目次"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#目次"}},[v._v("#")]),v._v(" 目次")]),v._v(" "),_("ol",[_("li",[v._v("CGI")]),v._v(" "),_("li",[v._v("PHP")]),v._v(" "),_("li",[v._v("サーブレット")]),v._v(" "),_("li",[v._v("Java EE / Spring")]),v._v(" "),_("li",[v._v("Ruby on Rails")]),v._v(" "),_("li",[v._v("Ajaxの出現 / フロントエンド+APIサーバの時代")]),v._v(" "),_("li",[v._v("Node.jsとクラウド")]),v._v(" "),_("li",[v._v("Goとマイクロサービス")])]),v._v(" "),_("h2",{attrs:{id:"cgi"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cgi"}},[v._v("#")]),v._v(" CGI")]),v._v(" "),_("p",[v._v("（1993年 フォーマルな仕様制定は1997年）")]),v._v(" "),_("ol",[_("li",[v._v("Common Gateway Interface")]),v._v(" "),_("li",[v._v("WebサーバでHTTPリクエストを受けて、外部プログラムにHTTPリクエストを渡し、外部プログラムの出力をHTTPレスポンスとして返すしくみ。")]),v._v(" "),_("li",[v._v("Perlが大流行するきっかけとなった。\n"),_("ol",[_("li",[v._v("Perlは文字列処理が強力（C言語は文字列処理が貧弱）")]),v._v(" "),_("li",[v._v("PerlからMySQL/PostgreSQLに接続してHTTPレスポンスを生成するスタイル")])])]),v._v(" "),_("li",[v._v("今日でもPerlで実装されたプロダクトは存続している（MovableTypeとか、mixiとか。CookPadもPerlでスタートしたはず)。")])]),v._v(" "),_("h2",{attrs:{id:"php"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#php"}},[v._v("#")]),v._v(" PHP")]),v._v(" "),_("p",[v._v("（開発開始は1994年 実質的に最初の公開版PHP 3が1997年 本格普及はPHP 4で2000年)")]),v._v(" "),_("ol",[_("li",[v._v("CGIはHTTPリクエストを受けるごとに、新しいプロセスをforkする必要があり、Webサーバにとって負荷が高かった。")]),v._v(" "),_("li",[v._v("WebサーバのモジュールとしてPerlを動作させる方法が考案された（mod_perl 1998年)。\n"),_("ol",[_("li",[v._v("しかしPerlはWebサーバのモジュールとして動作させる前提で設計/実装されたものではなく、やや使い勝手が悪かった。")]),v._v(" "),_("li",[v._v("類似の技術としてFastCGIというものもあり、これは常駐プロセスとしてCGI実行エンジンを用意しておき、HTTPリクエストを常駐プロセスに流し込むという方法。やはり癖があった。")])])]),v._v(" "),_("li",[v._v("最初からWebサーバのモジュールとして実行することを念頭に置いた、Webプログラミングに特化した処理系としてPHPが登場、大流行してPerlを駆逐する。\n"),_("ol",[_("li",[v._v("Facebookも長い間PHPで書かれていた。")])])])]),v._v(" "),_("h2",{attrs:{id:"サーブレット"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#サーブレット"}},[v._v("#")]),v._v(" サーブレット")]),v._v(" "),_("p",[v._v("（1996年に初期バージョンが公開 1998年に最初の公式API仕様が確立 2001年にStrutsが登場)")]),v._v(" "),_("ol",[_("li",[v._v("1995年Sun Microsystems社がJava言語を売り出した。\n"),_("ul",[_("li",[v._v("最初にアピールした"),_("code",[v._v("Applet")]),v._v("は、Webページの中にJavaのサンドボックス環境を埋め込んでアプリケーションを実行するというものだった。しかし制約が大きいうえにマシンパワーを要求するので、実用的なアプリケーションを作る環境としては、流行らなかった。")])])]),v._v(" "),_("li",[v._v("しかしサーバサイドの技術として発表されたサーブレットは2000年ごろから流行し始め、2001年にStrutsが登場するとその人気は決定的になった。\n"),_("ol",[_("li",[v._v("サーブレットはHTTPリクエストを（CGIのようにプロセスをforkするのではなく)スレッドで処理するので性能が高かった。")]),v._v(" "),_("li",[v._v("Javaは静的に型付けされた言語であるため、Javaで書かれたアプリケーションはPHPよりも品質を確保しやすいかった。")]),v._v(" "),_("li",[v._v("WebアプリケーションフレームワークであるStrutsを使うと、プログラムを一定のスタイルで記述することを助け、同時に大人数で分業することを助けた。規模の大きなエンタープライズシステムの実装が可能になった。")]),v._v(" "),_("li",[v._v("Javaで書かれたコードはポータビリティがあり、サーバのOSやCPUが変わっても、そのまま実行できた。（まだx86系のCPUが市場を独占しておらず、SPARCやAlphaなどのCPUもある程度のシェアを持っていた。)")])])]),v._v(" "),_("li",[v._v("かくしてカジュアルな（コンシューマ向けの）WebアプリケーションはPHPで、シリアスな（エンタープライズ向けの）WebアプリケーションはJavaサーブレットで書く、という時代が続くことになった。")])]),v._v(" "),_("h2",{attrs:{id:"java-ee-spring"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#java-ee-spring"}},[v._v("#")]),v._v(" Java EE / Spring")]),v._v(" "),_("p",[v._v("（Java EE 1999年 / Spring 2002年）")]),v._v(" "),_("ol",[_("li",[v._v("Sun Microsystemはサーブレットの成功に気を良くして、これを一層強力に推進してエンタープライズの世界を支配しようと試みた。そうして出てきたのはJava EE（Enterprise Edition）であった。")]),v._v(" "),_("li",[v._v("Java EEは、エンタープライズアプリケーションを多数のサーバの連携する分散処理を通じて実現することを構想し、その中核技術としてEJB（Enterprise JavaBeans）を据えた。EJBを使うと、ネットワーク越しにJavaのオブジェクトが通信し合い、データベースへの永続化も含めてエレガントに処理できるはずだった。Sun Microsystemsの制定したJava EE仕様を実装するアプリケーションサーバ製品が複数のベンダーから出荷され、活況を呈した。")]),v._v(" "),_("li",[v._v("だが、実際のJava EEアプリケーションサーバ製品は不安定で性能も悪く、プログラミングも難しいものであった。人々はJava EEを信じて使い続けていたが、疑問も大きく膨らんでいった。")]),v._v(" "),_("li",[v._v("そこに登場したのがSpring Frameworkだった。\n"),_("ul",[_("li",[v._v("作者のRod JohnsonがExpertt One-on-One J2EE Design and Developmentとともに世に問うたもの。")]),v._v(" "),_("li",[v._v("Java EE（J2EE) の欠点を指摘し、EJB、とりわけ"),_("code",[v._v("Entity Beans")]),v._v("を使うことは断念し、POJO（Plain Old Java Object) をベースに開発することを提唱した。")]),v._v(" "),_("li",[v._v("DI （Dependency Injecttion) のアイデアを普及させ、大規模なJavaアプリケーションを効率よく分業体制で実装する道を切り開いた。")])])]),v._v(" "),_("li",[v._v("Spring Frameworkは一世を風靡しただけでなく、今日まで人気を失うことなく、利用されている。\n"),_("ul",[_("li",[v._v("StrutsはStrus1の後継バージョンであるStruts2が、Struts1とまったく互換性がなかったため、Struts1を採用していた開発会社に受け入れられなかった。")]),v._v(" "),_("li",[v._v("その後脆弱性問題を連発したため、今日ではまったく人気がない。")])])])]),v._v(" "),_("h2",{attrs:{id:"ruby-on-rails"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ruby-on-rails"}},[v._v("#")]),v._v(" Ruby on Rails")]),v._v(" "),_("ol",[_("li",[v._v("2004年、37signales社がbasecampというプロジェクト管理アプリケーションの実装に使用していたRuby on RailsというWebアプリケーションフレームワークを発表した。Railsは非常にインパクトのあるフレームワークで、以降のサーバサイドプログラミングの世界を一変させてしまった。")]),v._v(" "),_("li",[v._v("その特徴を列挙すると以下のとおり。\n"),_("ol",[_("li",[v._v("2つの哲学。「同じことを繰り返さない DRY: Don't repeat yourself」「設定より規約 Convention over Configuration」\n"),_("ol",[_("li",[v._v("Strutsでは互いに関連し合う複雑な設定ファイルが多く必要だった\n"),_("ol",[_("li",[v._v("ルーティング（あるURLをどのアクションクラスで処理するかのマッピング）やアクションが処理するリクエストのフォームを記述するクラス、テンプレートの中で使用するタグライブラリの定義など")]),v._v(" "),_("li",[v._v("ほとんどの設定項目は、自動的なものであり、設定ファイルのメンテナンスは大量の単純作業であった。")])])]),v._v(" "),_("li",[v._v("そこで多くの現場ではExcelなどで主要設定項目を管理し、そのExcelファイルからマクロで個々の設定ファイルを生成するようなことが行われていた。")]),v._v(" "),_("li",[v._v("Railsでは、これを「デフォルトで定められているディレクトリ構造や命名規則に沿っている限り、設定ファイルは不要とする（特別な場合だけ、設定ファイルを書く）」という方法で解決した。")]),v._v(" "),_("li",[v._v("たとえばRDBMSのpersonテーブルに対応するモデルクラスを、ModelsディレクトリにあるPerson.rbファイルとして記述すれば、自動的にDBアクセス可能とするというような具合である。")])])]),v._v(" "),_("li",[v._v("コマンドラインユーティリティによる開発のサポート\n"),_("ol",[_("li",[v._v("たとえばあるURLに対応するコントローラクラスのスケルトンをコマンドラインユーティリティから生成できる。")]),v._v(" "),_("li",[v._v("このようなユーティリティを提供することで、開発者を単純作業から解放し、価値あるコードを書くことへ集中できるようにした。")])])]),v._v(" "),_("li",[v._v("Ruby on Railsに触発されて、別の言語でも同様のフレームワークが多数開発された。\n"),_("ol",[_("li",[v._v("PHP: CakePHP")]),v._v(" "),_("li",[v._v("Java: JBoss Seam, Java EE 6, Grails（Groovyを使う)")]),v._v(" "),_("li",[v._v("Python: Django")])])])])])]),v._v(" "),_("h2",{attrs:{id:"ajaxの出現-フロントエンド-apiサーバの時代"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ajaxの出現-フロントエンド-apiサーバの時代"}},[v._v("#")]),v._v(" Ajaxの出現 / フロントエンド+APIサーバの時代")]),v._v(" "),_("ol",[_("li",[v._v("Google MapsおよびGmailの出現により、「画面遷移を伴わないWebアプリケーション」というものがユーザーに認知され始めた。2005年ごろのことである。")]),v._v(" "),_("li",[v._v("Googleのエンジニアたちの使った技法は、技術としてはそれ以前から存在していたが誰も注目してこなかったXMLHttpRequestというJavaScriptの機能を初めて本格的に使用するものだった。\n"),_("ol",[_("li",[v._v("この技法をAsynchronous JavaScript + XMLの頭文字をとってAjax （エイジャックス) と呼ぶようになった。")])])]),v._v(" "),_("li",[v._v("StrutsやRuby on Railsはサーバサイド（バックエンド）側でリクエストを処理して画面も生成するというようなスタイルが中心だった。しかしAjaxが人気を集めるようになるとクライアント（フロントエンド）側で画面描画をすべて行い、バックエンドにはAPIサーバのみを置くというスタイルが人気を集めるようになった。\n"),_("ol",[_("li",[v._v("画面遷移を伴わないWebアプリケーションのことをSPA （Single Page Application) などと呼ぶ。")]),v._v(" "),_("li",[v._v("このスタイルが定着すると、デスクトップアプリケーションと比較しても遜色ないUIのWebアプリケーションが当たり前のように期待されるようになっていった。")]),v._v(" "),_("li",[v._v("要求の高度化に応えるため、フロントエンド側のフレームワークが非常に速いペースで開発されているのが今日の状況である。今日、人気のあるフロントエンド・フレームワークとしてReact （Facebook)、Angular （Google)、Vue.js （Evan You)などがある。")])])])]),v._v(" "),_("h2",{attrs:{id:"node-jsとクラウド"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#node-jsとクラウド"}},[v._v("#")]),v._v(" Node.jsとクラウド")]),v._v(" "),_("p",[v._v("ここまで出てきたJavaやRailsは基本的に同期的なI/Oとシングルプロセスで動作します。\nそのため複数のリクエストを同時に処理するためにはApacheなど外部のツールによってマルチプロセス化し、1つのリクエストを1プロセスに割り当てる形でレスポンスを返していました。")]),v._v(" "),_("p",[v._v("しかしWebサービスとインターネット利用者の増加、システムの複雑化によってプロセス単位での処理の限界が表面化してきました。1サーバあたりのプロセス数の上限値問題や、そもそもプロセスを作るコスト（メモリなど）が無視できなくなってきたのです。\nこうした問題を避けるため、1プロセスで複数のリクエストを処理できるアーキテクチャが注目されました。")]),v._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),_("p",[v._v("たとえば32bit環境のlinuxサーバでは、プロセスの管理番号の上限にあたるため32768がシステム上の限界値になります。\nまた１スレッドあたり数MBのメモリを使うため、8GBのメモリを積んだサーバでは4000ほどが上限になります。\n（あくまで理論上の話です）")])]),v._v(" "),_("p",[v._v("特に注目されたのが、非同期I/Oとevent drivenなアーキテクチャを特徴とするNode.jsです。\nNode.jsはJavaやRailsと同様にシングルプロセスで動作しますが、I/O待ち中にほかのリクエストを処理することで複数のリクエストを同時にさばくことができます。")]),v._v(" "),_("p",[v._v("またこのころから"),_("a",{attrs:{href:"https://aws.amazon.com/jp/lambda/",target:"_blank",rel:"noopener noreferrer"}},[v._v("AWS Lambda"),_("OutboundLink")],1),v._v("など、既存のWebサービスインフラとはまったく異なるクラウド独自のアーキテクチャが出てきました。")]),v._v(" "),_("h2",{attrs:{id:"goとマイクロサービス"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#goとマイクロサービス"}},[v._v("#")]),v._v(" Goとマイクロサービス")]),v._v(" "),_("p",[v._v("2017年ごろからの流れとしては、コンテナ化とマイクロサービスが挙げられます。")]),v._v(" "),_("p",[v._v("それまでは開発環境などで使われることが主だったdockerですが、kubernetesなどコンテナオーケストレーションツールの実用化によってproduction環境への採用が進みました。\nコンテナオーケストレーションツールを使ったサービスの運用は従来とはまったく異なり、宣言的な構成管理と自動化によって、インフラに縛られないダイナミックな運用が可能になります。\n（たとえば障害時の自動復旧や、高負荷時の自動拡張などがしくみとして備わっています。）")]),v._v(" "),_("p",[v._v("prometheusによるモニタリングなど、kubernetes周辺に存在する巨大なエコシステムも見逃せません。")]),v._v(" "),_("p",[v._v("コンテナ化に限った話ではありませんが、運用周りの技術発展に伴ってマイクロサービスアーキテクチャの採用が増えたと思います。\n従来のように巨大な1つのアプリケーション（モノリスと呼ばれる）を実装するのではなく、ビジネス領域や組織単位で小さなアプリケーションを構築し、それらが連携することで1つのサービスを提供する考え方です。\n分かりやすい例で言うと、ECサイトの買い物をするしくみと課金周りを別システムとして実装するような考え方です。")]),v._v(" "),_("p",[v._v("マイクロサービスアーキテクチャには以下のような利点があります。")]),v._v(" "),_("ul",[_("li",[v._v("領域ごとに最適な技術が採用できる")]),v._v(" "),_("li",[v._v("チームごとに別アプリケーションを実装することで、開発の並列度が上がる")]),v._v(" "),_("li",[v._v("障害やデプロイ時の影響範囲が限定される")]),v._v(" "),_("li",[v._v("コードベースが小さくなることでメンテナンス性が向上する")])]),v._v(" "),_("p",[v._v("一方でシステムが分散することで複雑性が増したり、ネットワーク越しに連携することによるパフォーマンス問題など、さまざまなデメリットも存在します。")]),v._v(" "),_("p",[v._v("このころから注目されるようになった言語として、"),_("a",{attrs:{href:"https://golang.org/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Go"),_("OutboundLink")],1),v._v("や"),_("a",{attrs:{href:"https://www.rust-lang.org/ja",target:"_blank",rel:"noopener noreferrer"}},[v._v("rust"),_("OutboundLink")],1),v._v("が挙げられます。\n特にGoはgoroutineと呼ばれる軽量なスレッドのしくみをもち、Webとの相性が良いことからサーバ側の開発言語として採用されることが非常に多くなりました。")]),v._v(" "),_("p",[v._v("これらの言語に共通するのは、静的な型付け機能をもつコンパイル言語という特徴です。\nこの少し前はRubyやJavaScript、Pythonなどの動的型付けかつインタプリタな言語が主流でした。しかし昨今はコンパイル時の型チェックの重要性が見直され、エディタへの親和性などからも静的型付き言語が注目されています。")]),v._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),_("p",[v._v("JavaScriptにも"),_("a",{attrs:{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[v._v("TypeScript"),_("OutboundLink")],1),v._v("という、コンパイルするとJavaScriptを生成する型付け言語が登場しています。")])]),v._v(" "),_("p",[v._v("またムーアの法則が崩壊し使えるマシンリソースの上限が見えてきたことで、インタプリタに比べて軽量なコンパイル言語への回帰も起こっているように思います。")]),v._v(" "),_("h2",{attrs:{id:"徳丸本"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#徳丸本"}},[v._v("#")]),v._v(" 徳丸本")]),v._v(" "),_("p",[v._v("Webアプリケーションは、われわれの生活に欠かせないものとなっているが、その実装には注意を要する。Webアプリケーションを実装するときには、悪意のユーザーによる攻撃を想定しないわけにはいきません。")]),v._v(" "),_("p",[v._v("安全なWebアプリケーションを実装するための知識を習得するには「徳丸本」と通称される、「体系的に学ぶ 安全なWebアプリケーションの作り方 第2版」を読むことが "),_("em",[v._v("強く")]),v._v(" 推奨される。")]),v._v(" "),_("p",[_("a",{attrs:{href:"https://www.sbcr.jp/product/4797393163/",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://www.sbcr.jp/product/4797393163/"),_("OutboundLink")],1)]),v._v(" "),_("credit-footer")],1)}),[],!1,null,null,null);a.default=e.exports}}]);