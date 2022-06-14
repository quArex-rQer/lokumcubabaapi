import './header.css';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-5'>
            <img
              src='https://www.imagelato.com/images/article-cover-restaurant-staff-list-e9d70f7c-1024w.jpg'
              alt=''
              width='100'
              className='img-fluid img-thumbnail'
            />
          </div>
          <div className='col-7'>
            <h1>Lorem ipsum dolor sit amet,</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              commodi veritatis vero illum expedita dicta maxime voluptatibus
              error aut! Sed minima magnam sunt! Laudantium iste, harum impedit
              beatae veritatis, animi voluptatum atque dolorum quisquam nostrum
              accusamus provident! Voluptatum voluptatibus eveniet architecto
              illo aliquam dolorum atque accusantium, nemo nostrum, rem delectus
              eligendi dicta assumenda inventore molestiae porro accusamus
              ipsum, sit perferendis necessitatibus id rerum quia veniam. Alias
              distinctio laudantium, in, deserunt laboriosam delectus dicta
              nobis enim quis nihil earum? Illo assumenda minus perferendis
              reprehenderit eum nam, tempora veritatis officiis doloremque
              magnam.
            </p>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-7'>
            <h1>Lorem ipsum dolor sit amet,</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              commodi veritatis vero illum expedita dicta maxime voluptatibus
              error aut! Sed minima magnam sunt! Laudantium iste, harum impedit
              beatae veritatis, animi voluptatum atque dolorum quisquam nostrum
              accusamus provident! Voluptatum voluptatibus eveniet architecto
              illo aliquam dolorum atque accusantium, nemo nostrum, rem delectus
              eligendi dicta assumenda inventore molestiae porro accusamus
              ipsum, sit perferendis necessitatibus id rerum quia veniam. Alias
              distinctio laudantium, in, deserunt laboriosam delectus dicta
              nobis enim quis nihil earum? Illo assumenda minus perferendis
              reprehenderit eum nam, tempora veritatis officiis doloremque
              magnam.
            </p>
            <Button href='/application' variant='primary'>
              Şube başvuru formu için tıkla !
            </Button>{' '}
          </div>

          <div className='col-5'>
            <img
              src='https://www.mevlanakuruyemis.com/wp-content/uploads/2020/12/s-78517b7af25b973e546e60ee58369f0e8ec0edf3.jpg'
              alt=''
              className='img-fluid img-thumbnail'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
