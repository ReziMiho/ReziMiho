import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Role } from '../translations'

interface RoleContextType {
  currentRole: Role | null
  setRole: (role: Role) => void
  hasSelectedRole: boolean
  selectInitialRole: (role: Role) => void
}

const RoleContext = createContext<RoleContextType | undefined>(undefined)

interface RoleProviderProps {
  children: ReactNode
}

export const RoleProvider: React.FC<RoleProviderProps> = ({ children }) => {
  const [currentRole, setCurrentRole] = useState<Role | null>(null)
  const [hasSelectedRole, setHasSelectedRole] = useState(false)

  // Load role from localStorage on mount
  useEffect(() => {
    const savedRole = localStorage.getItem('wedding-role') as Role | null
    if (savedRole && (savedRole === 'family' || savedRole === 'friends')) {
      setCurrentRole(savedRole)
      setHasSelectedRole(true)
    }
  }, [])

  const setRole = (role: Role) => {
    setCurrentRole(role)
    localStorage.setItem('wedding-role', role)
  }

  const selectInitialRole = (role: Role) => {
    setCurrentRole(role)
    setHasSelectedRole(true)
    localStorage.setItem('wedding-role', role)
  }

  const value: RoleContextType = {
    currentRole,
    setRole,
    hasSelectedRole,
    selectInitialRole,
  }

  return (
    <RoleContext.Provider value={value}>
      {children}
    </RoleContext.Provider>
  )
}

export const useRole = (): RoleContextType => {
  const context = useContext(RoleContext)
  if (context === undefined) {
    throw new Error('useRole must be used within a RoleProvider')
  }
  return context
} 