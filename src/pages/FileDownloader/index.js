import React from 'react';
import Header from 'components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFileDownloader from 'hooks/useFileDownloader';

const files = [
  {
    name: 'Image',
    file:
      'https://images.unsplash.com/photo-1604263439201-171fb8c0fddc?rnd=' +
      Math.random(),
    filename: 'photo-1.jpg',
  },
];

const FileDownloader = () => {
  const [downloadFile, downloaderComponentUI] = useFileDownloader();

  const download = file => downloadFile(file);

  return (
    <>
      <Header title='File downloader with progress bar' />

      <div className='row'>
        <div className='col text-center'>
          <div className='row mt-3'>
            {files.map((file, idx) => (
              <div className='col' key={idx}>
                <div className='card '>
                  <div className='card-body' key={idx}>
                    <img className='card-img-top mb-3' src={file.thumb} />
                    <h5 className='card-title'>{file.name}</h5>
                    <form>
                      <label>
                        URL :
                        <input type='text' name='name' />
                      </label>
                    </form>
                    <a
                      className='btn btn-primary cursor-pointer text-white'
                      onClick={() => download(file)}
                    >
                      Download <FontAwesomeIcon icon='download' />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {downloaderComponentUI}
      </div>
    </>
  );
};

export default FileDownloader;
