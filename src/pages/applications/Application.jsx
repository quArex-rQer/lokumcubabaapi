import {useState} from 'react';
import './applications.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Navbarr from '../../components/navbar/Navbar';
import {useContext} from 'react';
import {AuthContext} from '../../context/AuthContext';

const Applications = () => {
  const [inputs, setInputs] = useState({
    nameSurname: undefined,
    identity: undefined,
    address: undefined,
    telephoneNumber: undefined,
    email: undefined,
    birthDay: undefined,
    experience: undefined,
    reason: undefined,
    where: undefined,
    amountOfInvestment: undefined,
    anythingMore: undefined,
  });

  const {user} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.id]: e.target.value}));
  };

  const handlePost = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/application', inputs);
      navigate('/');
    } catch (err) {
      throw err;
    }
  };
  return (
    <div className='yok'>
      <div className='cont'>
        <div className='title'>Başvuru formu</div>
        <div className='user-details'>
          <div className='input-box'>
            <span className='details'>İsim Soyisim</span>
            <input
              type='text'
              placeholder='İsim soyisim'
              id='nameSurname'
              required
              onChange={handleChange}
            />
          </div>
          <div className='input-box'>
            <span className='details'>TC Kimlik</span>
            <input
              type='text'
              placeholder='TC kimlik numaranızı giriniz.'
              id='identity'
              required
              onChange={handleChange}
            />
          </div>
          <div className='input-box'>
            <span className='details'>Adres</span>
            <input
              type='text'
              placeholder='Adresinizi giriniz'
              id='address'
              required
              onChange={handleChange}
            />
          </div>
          <div className='input-box'>
            <span className='details'>Telefon Numarası</span>
            <input
              type='number'
              placeholder='Telefon Numaranızı Giriniz'
              id='telephoneNumber'
              required
              onChange={handleChange}
            />
          </div>
          <div className='input-box'>
            <span className='details'>E-mail</span>
            <input
              type='Email'
              placeholder='Adınızı giriniz'
              id='email'
              required
              onChange={handleChange}
            />
          </div>
          <div className='input-box'>
            <span className='details'>Doğum tarihi</span>
            <input
              type='text'
              placeholder='Doğum tarihinizi giriniz.'
              id='birthDay'
              required
              onChange={handleChange}
            />
          </div>
          <div className='input-box'>
            <span className='details'>
              Perakende ticareti ile uğraştınız mı?
            </span>
            <input
              type='text'
              id='experience'
              required
              onChange={handleChange}
            />
          </div>
          <div className='input-box'>
            <span className='details'>
              Bizi Tercih Etmenizin Sebebi Nedir ?
            </span>
            <input type='text' id='reason' required onChange={handleChange} />
          </div>
          <div className='input-box'>
            <span className='details'>
              Hangi il/ilçe/semt için Lokumcu Baba işletmeciliği düşünüyorsunuz?
            </span>
            <input type='text' id='where' required onChange={handleChange} />
          </div>
          <div className='input-box'>
            <span className='details'>Yatırım miktarınız nedir?(TL)</span>
            <input
              onChange={handleChange}
              type='number'
              min={0}
              id='amountOfInvestment'
              required
            />
          </div>
          <div className='input-box'>
            <span className='details'>
              Eklemek istediğiniz bir şey var mı ?
            </span>
            <input
              onChange={handleChange}
              type='text'
              id='anythingMore'
              required
            />
          </div>
        </div>

        <button onClick={handlePost} className='button'>
          Başvur
        </button>
      </div>
    </div>
  );
};

export default Applications;
