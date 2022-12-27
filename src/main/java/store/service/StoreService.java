package store.service;

import java.util.List;

import store.bean.StoreDTO;

public interface StoreService {

	public List<StoreDTO> getStoreList();

	public void write(StoreDTO storeDTO);

	public String isExistSubject(String subject);

	public List<StoreDTO> getPopcornList(String category);

}
