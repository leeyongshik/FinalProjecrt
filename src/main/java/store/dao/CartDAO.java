package store.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import store.bean.CartDTO;

@Repository
public interface CartDAO extends JpaRepository<CartDTO, Long> {
	
	//	@Query("select cartDTO from CartDTO cartDTO where cartDTO.username=:username")
	//	public List<CartDTO> findBySubject(@Param("username") String username);
	
	@Query("select cartDTO from CartDTO cartDTO where cartDTO.userName=:userName and cartDTO.store_seq=:store_seq")
	public Optional<CartDTO> isExistCart(@Param("userName") String userName, @Param("store_seq") String store_seq);

}
