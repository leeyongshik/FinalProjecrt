package store.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import store.bean.StoreDTO;

@Repository
public interface StoreDAO extends JpaRepository<StoreDTO, String>{
	
	@Query("select storeDTO from StoreDTO storeDTO where storeDTO.subject=:subject")
	public Optional<StoreDTO> findBySubject(@Param("subject") String subject);
	
	@Query("select storeDTO from StoreDTO storeDTO where storeDTO.category=:category")
	public List<StoreDTO> findByPopcorn(@Param("category") String category);

}
