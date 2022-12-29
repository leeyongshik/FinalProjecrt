package store.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import store.bean.CartDTO;
import store.bean.StoreDTO;

@Repository
public interface CartDAO extends JpaRepository<CartDTO, Long> {
	
//	@Query("select cartDTO from CartDTO cartDTO where cartDTO.username=:username")
//	public Optional<StoreDTO> findBySubject(@Param("subject") String subject);
}
