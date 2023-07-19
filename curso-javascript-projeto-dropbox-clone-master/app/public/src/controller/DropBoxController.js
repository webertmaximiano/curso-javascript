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

            this.uploadTask(event.target.files);


            this.snackModalEl.style.display = 'block';
        });
    }

    uploadTask(files){

        let promises = [];

        [...files].forEach(file=>{
            //gerencia as promessas de envio de arquivos
            promises.push(new Promise((resolve, reject)=> {
                // criando a conexao ajax para envio dos arquivos    
                let ajax = new XMLHttpRequest();
                ajax.open('POST', '/upload');

                ajax.onload = event=> {

                    try {

                        resolve(JSON.parse(ajax.responseText));

                    } catch (e) {

                        reject(e);

                    }

                };

                ajax.onerror = event => {
                    
                    reject(event);

                };

                let formData = new FormData();

                formData.append('input-file', file);

                ajax.send(formData);

            }));

        });

        return Promise.all(promises);
    }
}