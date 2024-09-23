import * as components from './components/indexPadre';
import Post, {PostType} from './components/Post/Post';
import Navbar from './components/navigation/NavBar';

class AppContainer extends HTMLElement {

    posts: { post: string; comment: string, author?: string, likes?: number }[] = [
        { post: 'Post 1', comment: 'This is the first comment', author: 'John Doe', likes: 5 },
        { post: 'Post 2', comment: 'This is the second comment' , author: 'Dave' },
        { post: 'Post 3', comment: 'This is the third comment', likes: 3 },
        { post: 'Post 4', comment: 'This is the fourth comment', author: 'Jane Doe', likes: 10 },
        { post: 'Post 5', comment: 'This is the fifth comment', author: 'Jane Doe', likes: 10 },
        { post: 'Post 6', comment: 'This is the sixth comment', author: 'Jane Doe', likes: 10 },

    ];


    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        //mostrrar la bara de navegacion
        const navbar = new Navbar();
        //mostrar los posts
        this.posts.forEach((post) => {
            const postComponent = new Post();
            const container = this.shadowRoot?.querySelector('.container');
            postComponent.setAttribute('post', post.post);
            postComponent.setAttribute('comment', post.comment);
            if (post.author) {
                postComponent.setAttribute('author', post.author);
            }
            if (post.likes) {
                postComponent.setAttribute('likes', post.likes.toString());
            }
            container?.appendChild(postComponent);
        });
    }

    render () {
        if (this.shadowRoot) {
            // Limpiar el contenido anterior
            this.shadowRoot.innerHTML = `
                <style>
                    .container {
                        max-width: 800px;
                        margin: 0 auto;
                        padding: 10px;
                        margin-top: 4rem;
                    }
                </style>
                <navbar-component></navbar-component>
                <div class="container">
                </div>
            `;
        }
}
}

customElements.define('app-container', AppContainer);
