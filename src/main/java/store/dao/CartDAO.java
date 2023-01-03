package store.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import store.bean.CartDTO;

@Repository
public interface CartDAO extends JpaRepository<CartDTO, String> {
	
	@Query("select cartDTO from CartDTO cartDTO where cartDTO.userName=:userName and cartDTO.store_seq=:store_seq and cartDTO.state='cart'")
	public Optional<CartDTO> isExistCart(@Param("userName") String userName, @Param("store_seq") String store_seq);

	@Query("select cartDTO from CartDTO cartDTO where cartDTO.userName=:userName and cartDTO.state='cart' order by cart_seq desc")
	public List<CartDTO> findByCart(@Param("userName") String userName);
	
	@Query("select cartDTO.count from CartDTO cartDTO where cartDTO.userName=:userName and cartDTO.state='cart' order by cart_seq desc")
	public List<Integer> findByCartCount(@Param("userName") String userName);
	
//	@Query("delete from CartDTO cartDTO where cartDTO.cart_seq=:cart_seq")
//	public void deleteById(@Param("cart_seq") int cart_seq);
}
