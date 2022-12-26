package store.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import store.bean.StoreDTO;

public interface StoreDAO extends JpaRepository<StoreDTO, String>{

}
