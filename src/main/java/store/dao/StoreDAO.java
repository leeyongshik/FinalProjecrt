package store.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import store.bean.StoreDTO;
import store.bean.UserDTO;

@Repository
public interface StoreDAO extends JpaRepository<StoreDTO, Long>{
	
	@Query("select storeDTO from StoreDTO storeDTO where storeDTO.subject=:subject")
	public Optional<StoreDTO> findBySubject(@Param("subject") String subject);
	
	@Query("select storeDTO from StoreDTO storeDTO where storeDTO.category=:category")
	public List<StoreDTO> findByPopcorn(@Param("category") String category);
	
	@Query("select storeDTO from StoreDTO storeDTO where storeDTO.store_seq=:store_seq")
	public Optional<StoreDTO> findByStore_seq(@Param("store_seq") int store_seq);
	
	@Query("select userDTO from UserDTO userDTO where userDTO.userName=:userName and userDTO.password=:password")
	public UserDTO login(@Param("userName") String userName, @Param("password") String password);
	
}
