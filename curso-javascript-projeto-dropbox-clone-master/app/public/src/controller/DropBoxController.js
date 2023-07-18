class DropBoxController {
    constructor(){
        //botao enviar arquivo
        this.btnSendFileEl = document.querySelector('#btn-send-file'); //evento click
        this.inputFilesEl = document.querySelector('#files'); // selecionador de arquivo
        this.snackModalEl = document.querySelector('#react-snackbar-root'); // barra de progresso upload de arquivo

        this.initEvents();
    }

    initEvents(){
        //fica escutando ao clicar no botao
        this.btnSendFileEl.addEventListener('click', event => {
            this.inputFilesEl.click();// dispara o evento abrindo selecionador de arquivo
        });

        this.inputFilesEl.addEventListener('change', event => {

            console.log(event.target.files);

            this.snackModalEl.style.display = 'block';
        });
    }
}