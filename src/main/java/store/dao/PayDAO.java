package store.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import store.bean.PayDTO;

@Repository
public interface PayDAO extends JpaRepository<PayDTO, String> {
	
	
}
