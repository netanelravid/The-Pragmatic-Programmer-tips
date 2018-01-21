<template>
    <div id="app">
        <span v-html="content"></span>
    </div>
</template>

<script>

export default {
    name: 'app',
    data() {
        return {
            content: '',
        }
    },
    methods: {
        async convertMarkdown(markdown_text) {
            const converter = new showdown.Converter();
            let converterOptions = converter.getOptions();

            converterOptions.emoji = true;
            const html = converter.makeHtml(markdown_text);
            return Promise.resolve(html);
        },
        async getMarkdownData(url) {
            const fetchData = new Promise((resolve, reject) => {
                let request = new XMLHttpRequest();

                request.open('GET', url);
                request.onload = () => {
                    if (request.status == 200) {
                        resolve(request.responseText);
                    } else {
                        reject(Error(request.statusText));
                    }
                }
                request.onerror = () => {
                    reject(Error('Error fetching data.'));
                }

                request.send();
            });

            return fetchData;
        },
        async displayContent(url) {
            try {
                const markdownData = await this.getMarkdownData(url=url);
                const htmlData = await this.convertMarkdown(markdownData);

                this.content = htmlData;
            }
            catch (error) {
                console.log(error.message);
            }
        },
    },
    mounted() {
        (async () => await this.displayContent('https://raw.githubusercontent.com/netanelravid/The-Pragmatic-Programmer-tips/master/README.md'))();
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}

h1,h2,h4 {
    font-family: 'Garamond';
}
</style>
