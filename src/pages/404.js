import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/Layout/Layout"
import Seo from "../components/common/Seo"

const NotFoundPage = () => (
  <Layout>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404: 페이지를 찾을 수 없습니다</h1>
      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
        요청하신 페이지를 찾을 수 없습니다.
      </p>
      <Link
        to="/"
        style={{
          padding: '0.8rem 1.5rem',
          backgroundColor: '#333',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          transition: 'background-color 0.3s ease',
        }}
      >
        메인페이지로 돌아가기
      </Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: 페이지를 찾을 수 없습니다" />

export default NotFoundPage
