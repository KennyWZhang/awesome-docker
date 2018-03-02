import showdown from 'showdown';
import './style.css';
import Icon from './icon.png';

const md = document.getElementById('md');
    const converter = new showdown.Converter();
    converter.setFlavor('github');
    converter.setOption('ghCompatibleHeaderId', true);
    converter.setOption('prefixHeaderId', false);
    converter.setOption('simplifiedAutoLink', true);
    fetch('https://raw.githubusercontent.com/veggiemonk/awesome-docker/master/README.md')
      .then(res => res.text())
      .catch(err => console.error(err))
      .then(text => {
        // md.innerHTML = emojione.toImage(converter.makeHtml(text));
        md.innerHTML = converter.makeHtml(text);
      });