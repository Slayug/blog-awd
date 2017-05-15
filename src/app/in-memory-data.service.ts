import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let articles = [
            {
                id: 0,
                title: 'hello world',
                thumbnail: 'http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg',
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.<br/>Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."
            },
            {
                id: 1,
                title: 'Git ignore',
                thumbnail: 'https://git-for-windows.github.io/img/git_logo.png',
                content: "toafriuefnreiufnie fzunfiferi firneiferfi frejfnerifne ferir uferif eriunferif erif erife rif reif erifsif,ijr frisqfd ref eif <br/><p class='snippet'># Which TCP/UDP port should OpenVPN listen on? <br/># If you want to run multiple OpenVPN instances <br/># on the same machine, use a different port <br/># number for each one.  You will need to <br/># open up this port on your firewall.port 80</p>"
            },
            {
                id: 2,
                title: 'Taverne du dev',
                thumbnail: 'https://cdn.worldvectorlogo.com/logos/slack-1.svg',
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a consectetur libero. Vivamus lacus nulla, efficitur sit amet sem a, pharetra ornare mi. Ut in rhoncus velit, vitae ultricies turpis. Morbi lacus ante, finibus ac tortor elementum, dapibus tincidunt dui. Vestibulum non arcu et justo pulvinar varius. Integer at tortor rhoncus, elementum ipsum ultrices, dictum orci. Nam at facilisis sapien. Aliquam molestie faucibus convallis.<br/>Suspendisse potenti. Duis<a href='https://tavernedudev.slack.com/'>https://tavernedudev.slack.com/</a> justo at eleifend. Etiam id quam dolor. Vestibulum odio urna, tincidunt eu venenatis sed, hendrerit vitae magna. Proin eu diam aliquet, mattis lacus quis, viverra orci. Morbi nec rutrum augue, ac consectetur diam.<br/>Sed laoreet semper vulputate. Sed blandit nisl vel diam mattis consequat. Ut in nisl sit amet tortor fringilla vulputate ut posuere nulla. Fusce laoreet magna ac orci vehicula facilisis. Nunc tempus scelerisque nisi sit amet efficitur. Sed nulla dolor, tristique non velit at, iaculis maximus lacus.<br/>Duis porta at ex quis cursus. Nulla ultricies varius justo, eu vestibulum purus vulputate sit amet. Vestibulum pellentesque laoreet dolor, a pharetra ipsum blandit nec."
            }
        ];
        let projects = [
            {
                id: 0,
                title: 'tnsg',
                thumbnail: 'https://webdesignledger.com/wp-content/uploads/2015/08/nativescript_logo.png',
                content: "A NativeScript CLI Generator <br/> Generate quickly your pages, services, class..<br/><a href='https://github.com/Slayug/tnsg'>Github</a>,<br/><a href='https://npmjs.com/package/tnsg'>npm package</a>."
            },
            {
                id: 1,
                title: 'Tongue',
                thumbnail: 'https://s-media-cache-ak0.pinimg.com/736x/31/95/70/31957007b62c771312d9db4a8e719d77.jpg',
                content: "Manage yours translations dynamically on your website. No reload page !<br/><a href='http://buuuuug.ddns.net/tongue/'>Demo</a>,<br/><a href='https://github.com/Slayug/'>Github</a>"
            },
            {
                id: 2,
                title: 'ancor2',
                thumbnail: '',
                content: "Ce projet s'est déroulé autour du context du projet <a href='http://tln.li.univ-tours.fr/Tln_Corpus_Ancor.html'>Ancor</a> Le logiciel a été conçu dans l’objectif de convertir des corpus annotés en anaphore dans le cadre du projet Ancor. Les corpus ciblés ont été annotés avec le logiciel Glozz."
            }
        ];
        return { articles, projects };
    }
}
