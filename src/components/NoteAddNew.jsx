import React from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
class NoteAddNew extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: "",
            body: "",
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event){
        this.setState(() => {
            return {
                title: event.target.value
            }
        });
    }

    onBodyChangeEventHandler(event){
        this.setState(() => {
            return { 
                body: event.target.value
            }
        });
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        if (this.state.title.trim() === "" || this.state.body.trim() === "") {
            // alert("Judul dan isi catatan tidak boleh kosong!");
            MySwal.fire({
                icon: "error",
                title: "Gagal",
                text: "Judul ataupun isi catatan tidak boleh kosong.",
                confirmButtonColor: "#00a6f4",
                });
            return;
        }

        this.props.addNote(this.state);
        
        this.setState({
            title: "",
            body: ""
        });
    }

    render() {
        return (
        <div>
            <div className="w-100 mx-auto mt-10">
                <h2 className="text-center text-2xl font-semibold">Buat Catatan Baru</h2>
            </div>
            <form onSubmit={this.onSubmitEventHandler}>
                <div className="w-100 mx-auto">
                    <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
                        Judul
                    </label>
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-sky-500">
                        <input type="text" name="" id="" placeholder="Maksimal 50 karakter" minLength="1" maxLength="50" value={this.state.title} onChange={this.onTitleChangeEventHandler} className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"/>   
                    </div>
                </div>
                <div className="w-100 mx-auto mt-5">
                    <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
                        Isi
                    </label>
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-sky-500">
                        <textarea name="" id="" placeholder="Maksimal 1000 karakter" rows="5" cols="20" minLength="1" maxLength="1000" value={this.state.body} onChange={this.onBodyChangeEventHandler} className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"/>
                    </div>
                </div>
                <div className="w-100 mx-auto">
                    <button type="submit" className="w-100 h-10 mx-auto my-8 rounded-md bg-sky-500/100 text-white">Tambah</button>
                </div>
            </form>
        </div>
    );
    }
}

export default NoteAddNew;