package store.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import store.bean.StoreDTO;

@Repository
public interface StoreDAO extends JpaRepository<StoreDTO, String>{

}
