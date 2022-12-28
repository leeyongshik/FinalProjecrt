package store.service;

import java.util.List;
import java.util.Optional;

import store.bean.StoreDTO;

public interface StoreService {

	public List<StoreDTO> getStoreList();

	public void write(StoreDTO storeDTO);

	public String isExistSubject(String subject);

	public Optional<StoreDTO> getStore(int store_seq);
	
	public List<StoreDTO> getPopcornList(String category);

}
