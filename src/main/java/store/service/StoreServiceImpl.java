package store.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import store.bean.StoreDTO;
import store.dao.StoreDAO;

@Service
public class StoreServiceImpl implements StoreService {
	@Autowired
	private StoreDAO storeDAO;

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
		Optional<StoreDTO> storeDTO = storeDAO.findById(subject);
		System.out.println(storeDTO); //값이 없으면 Optional.empty
		
		if(storeDTO.isPresent()) //값이 없으면 false
			return "exist";
		else
			return "non_exist";
	}

}
