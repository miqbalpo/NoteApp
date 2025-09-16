import React from "react";


class NoteAppHeader extends React.Component {
    constructor(props) {
        super(props);
        this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
    }

    onSearchChangeHandler(event) {
        this.props.onSearch(event.target.value);
    }
    
    render() {
        return (
            <div className="flex content-center sticky top-0 bg-white">
                <div className="m-auto ml-8 my-8">
                    <h1 className="text-xl font-semibold">Aplikasi Catatan Sederhana</h1>
                </div>
                <div className="m-auto mr-8 my-8 flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-sky-500">
                    <input type="text" name="" id="" placeholder="Cari catatan..." onChange={this.onSearchChangeHandler} className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"/>  
                </div>
            </div>
        );
    }
}

export default NoteAppHeader;