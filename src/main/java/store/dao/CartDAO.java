package store.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import store.bean.CartDTO;

@Repository
public interface CartDAO extends JpaRepository<CartDTO, Long> {

}
