import * as GetImages from '../service/axios-api';

import React, { Component } from 'react';
// import { ToastContainer, toast } from 'react-toastify';

// import { Toaster } from 'react-hot-toast';

// import Button from 'components/Button/Button';
// import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
// import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchQuery: '',
    gallery: [],
    modalUrl: null,
    showModal: false,
    page: 1,
    
  };

  componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      GetImages.getImages(searchQuery, page).then(data => {
        return this.setState(prevState => ({
          gallery: [...prevState.gallery, ...data.hits],
          showBtn: Math.ceil(data.totalHits / 12),
        }));
      });
    }
  }
  getSearchQuery = name => {
    this.setState({ searchQuery: name });
  };

  handleClickLoadMoreBtn = event => {
    event.preventDefault();
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggelModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { gallery, showModal, modalUrl } = this.state;
    return (
      <>
        <h1>app title</h1>
        <Searchbar onSubmit={this.getSearchQuery} />
        {gallery && <ImageGallery gallery={gallery} />}
        <button type="button" onClick={this.toggelModal}>
          Открыть модалку
        </button>
        {showModal && (
          <Modal onClose={this.toggelModal}>
            <div>
              <img src={modalUrl} alt="" />
            </div>
          </Modal>
        )}
      </>
    );
  }
}
