import '../SearchBar/SearchBar.scss';

const SearchBar = () => {

    return (
            <div className='search-bar'>
                <input
                    className='search-bar--bar'
                    type="text"
                    placeholder="Search">
                </input>
            </div>            
            // <input
            //     className='search-bar--bar'
            //     type="text"
            //     placeholder="Search">
            // </input>
    )
}   

export default SearchBar;