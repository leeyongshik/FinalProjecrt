package store.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import store.bean.CartDTO;
import store.bean.PayDTO;
import store.bean.StoreDTO;
import store.bean.UserDTO;
import store.dao.CartDAO;
import store.dao.PayDAO;
import store.dao.StoreDAO;

@Service
public class StoreServiceImpl implements StoreService {
	@Autowired
	private StoreDAO storeDAO;
	@Autowired
	private CartDAO cartDAO;
	@Autowired
	private PayDAO payDAO;

	@Override
	public List<StoreDTO> getStoreList() {
		//DB
		return storeDAO.findAll();
	}

	@Override
	public void write(StoreDTO storeDTO) {
		//DB
		//subject 컬럼이 primary key로 설정되어 있기 때문에
		//똑같은 시퀀스가 없으면 insert로 수행이 되고, 시퀀스가 있으면 update로 수행된다.
		storeDAO.save(storeDTO);
	}

	@Override
	public String isExistSubject(String subject) {
		//DB
		Optional<StoreDTO> storeDTO = storeDAO.findBySubject(subject);
		System.out.println(storeDTO); //값이 없으면 Optional.empty
		
		if(storeDTO.isPresent()) //값이 없으면 false
			return "exist";
		else
			return "non_exist";
	}

	@Override
	public List<StoreDTO> getPopcornList(String category) {
		//DB
		return storeDAO.findByPopcorn(category);
	}

	@Override
	public Optional<StoreDTO> getStore(int store_seq) {
		//DB
		return storeDAO.findByStore_seq(store_seq);
	}

	@Override
	public UserDTO login(UserDTO userDTO) {
		return storeDAO.login(userDTO.getUserName(), userDTO.getPassword());
	}
	
	@Override
	public UserDTO getUser(String userName) {
		return storeDAO.getUser(userName);
	}

	@Override
	public void insertCart(CartDTO cartDTO) {
		cartDAO.save(cartDTO);
	}

	@Override
	public String isExistCart(String userName, String store_seq) {
		//DB
		Optional<CartDTO> cartDTO = cartDAO.isExistCart(userName, store_seq);
		System.out.println(store_seq); //값이 없으면 Optional.empty
		
		if(cartDTO.isPresent()) //값이 없으면 false
			return "exist";
		else
			return "non_exist";
	}

	@Override
	public List<CartDTO> getCartList(String userName) {
		//DB
		return cartDAO.findByCart(userName);
	}

	@Override
	public List<Integer> getCartListCount(String userName) {
		//DB
		return cartDAO.findByCartCount(userName);
	}

	@Override
	public void deleteCart(String cart_seq) {
		cartDAO.deleteById(cart_seq);
	}

	@Override
	public void updateCart(CartDTO cartDTO) {
		//DB
		cartDAO.save(cartDTO);
	}
	
	@Override
	public CartDTO getOne(String userName, String store_seq) {
		//DB
		return cartDAO.findByOne(userName, store_seq);
	}

	@Override
	public List<StoreDTO> getIndexCombo() {
		return storeDAO.getIndexCombo();
	}
	
	@Override
	public List<StoreDTO> getIndexPopcorn() {
		return storeDAO.getIndexPopcorn();
	}

	@Override
	public List<StoreDTO> getIndexDrink() {
		return storeDAO.getIndexDrink();
	}

	@Override
	public List<StoreDTO> getIndexSnack() {
		return storeDAO.getIndexSnack();
	}

	@Override
	public void insertPay(PayDTO payDTO) {
		payDAO.save(payDTO);
	}

	@Override
	public PayDTO getPay(String orderNumber) {
		//DB
		return payDAO.findByPay(orderNumber);
	}
	
}
